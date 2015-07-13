var gulp = require('gulp'), concat, rename, uglify, jade, sourcemaps, changed, minifyHTML, cachebreaker, stylus,
    minifyCss, nib, jshint, complexity, htmlhint, size, templateCache, ngAnnotate,
    mergeStream, connect;

var src = {
    stylesDirs: ['src/common_styles/**/*.styl', 'src/pages/**/*.styl'],
    jade: {
        main: ['*.jade'],
        templates: ['src/pages/**/*.jade', 'src/partials/**/*.jade']
    },
    jsDir: 'src/**/*.js'
};

var dest = {
    dist: 'dist'
};

gulp.task('lint', function () {
    jshint = jshint || require('gulp-jshint');

    return gulp.src(src.jsDir)
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                angular: true,
                localStorage: true,
                console: true
            }
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('htmlhint', function () {
    htmlhint = htmlhint || require("gulp-htmlhint");
    jade = jade || require('gulp-jade');

    var html = src.jade.templates.concat(src.jade.main);
    return gulp.src(html)
        .pipe(jade({pretty: false}))
        .pipe(htmlhint({
            "tagname-lowercase": true,
            "attr-lowercase": true,
            "attr-value-double-quotes": true,
            "doctype-first": false,
            "tag-pair": true,
            "spec-char-escape": true,
            "id-unique": true,
            "src-not-empty": true,
            "attr-no-duplication": true
        }))
        .pipe(htmlhint.reporter())
});

gulp.task('sizes_dist', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css'
    ]).pipe(size());
});

gulp.task('sizes_libs', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'bower_components/**/*.js',
        'bower_components/**/*.css'
    ]).pipe(size());
});

function makeJade() {
    templateCache = templateCache || require('gulp-angular-templatecache');
    //changed = changed || require('gulp-changed');
    minifyHTML = minifyHTML || require('gulp-minify-html');
    jade = jade || require('gulp-jade');

    return gulp.src(src.jade.templates)
        .pipe(jade({pretty: false}))
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(templateCache({
            module: 'app.templates',
            standalone: true
        }))
}

function makeJS() {
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    //changed = changed || require('gulp-changed');
    concat = concat || require('gulp-concat');

    return gulp.src([src.jsDir])
        //.pipe(changed(dest.staticDir))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        ;
}

function mergeJS(templates, mainJs) {
    mergeStream = mergeStream || require('merge-stream');
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    concat = concat || require('gulp-concat');

    return mergeStream(templates, mainJs)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'app.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
}

function buildJS() {
    var templates = makeJade();
    var mainJs = makeJS();
    return mergeJS(templates, mainJs);
}


gulp.task('js', function () {
    buildJS();
});

gulp.task('jade_static_templates', function () {
    gulp.start('js');
});

gulp.task('jade_static_main', function () {
    cachebreaker = cachebreaker || require('gulp-cache-breaker');
    changed = changed || require('gulp-changed');
    minifyHTML || require('gulp-minify-html');
    jade = jade || require('gulp-jade');

    return gulp.src(src.jade.main)
        .pipe(changed(dest.dist, {extension: '.html'}))
        .pipe(jade({pretty: false}))
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(cachebreaker())
        .pipe(gulp.dest('./'));
});

gulp.task('jade_and_js', function () {
    buildJS();
    gulp.start('jade_static_main');
});

gulp.task('stylus', function () {
    stylus = stylus || require('gulp-stylus');
    minifyCss = minifyCss || require('gulp-minify-css');
    nib = nib || require('nib');
    changed = changed || require('gulp-changed');
    concat = concat || require('gulp-concat');

    return gulp.src(src.stylesDirs)
        .pipe(changed(dest.dist))
        .pipe(concat('app.min.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('purify_css', function () {
    return purifyCss({
        src: ['index.html', 'dist/app.min.js', 'dist/vendor.min.js'],
        css: ['dist/vendor.min.css'],
        output: 'dist/vendor.purified.min.css'
    });
});

function purifyCss(settings) {
    var fs = require('fs');
    var purify = require('purify-css');
    var pure = purify(settings.src, settings.css, {write: false, info: true});

    fs.writeFile(settings.output, pure, function (err) {
        if (err) return err;
    });
}

gulp.task('vendor_js', function () {
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    concat = concat || require('gulp-concat');

    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-ui-router-anim-in-out/anim-in-out.js',
        'bower_components/angular-loading-bar/build/loading-bar.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'vendor.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
});

gulp.task('vendor_css', function () {
    minifyCss = minifyCss || require('gulp-minify-css');
    var concatVendorCss = require('gulp-concat-css');

    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootswatch/paper/bootstrap.min.css',
        'bower_components/angular-loading-bar/build/loading-bar.min.css'
    ], {base: 'dist'})
        .pipe(concatVendorCss('vendor.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');

    gulp.watch(src.jade.main, ['jade_static_main']);
    gulp.watch(src.jade.templates, ['jade_static_templates']);

    gulp.watch(src.stylesDirs, ['stylus']);
    gulp.watch([src.jsDir], ['js']);
});

gulp.task('build_vendor', function () {
    gulp.start('vendor_js');
    gulp.start('vendor_css');
    gulp.start('purify_css');
});

gulp.task('build', function () {
    gulp.start('jade_and_js');
    gulp.start('stylus');
    gulp.start('purify_css');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});

gulp.task('webserver', function () {
    connect = connect || require('gulp-connect');

    connect.server({
        root: [__dirname],
        port: 8001,
        livereload: true
    });
});
