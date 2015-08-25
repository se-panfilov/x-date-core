'use strict';

var gulp = require('gulp'), concat, rename, uglify, jade, sourcemaps, watch, changed,
    ngAnnotate, stylus, nib, minifyHTML, minifyCss, templateCache, mergeStream,
    cssBase64, size, stylish, order;

var src = {
    styles: ['src/view/templates/**/*.styl'],
    jade: ['src/view/templates/**/*.jade'],
    html: ['src/view/templates/**/*.html'],
    coreJs: ['src/core/*.js'],
    viewJs: ['src/view/*.js']
};

var dest = {
    dist: 'dist',
    src: 'src',
    templates: 'src/templates'
};

gulp.task('lint', function () {
    //tslint = tslint || require('gulp-tslint');
    //stylish = stylish || require('gulp-tslint-stylish');
    //
    //return gulp.src(src.ts)
    //    .pipe(tslint())
    //    .pipe(tslint.report(stylish, {
    //        emitError: false
    //    }));
});

gulp.task('todo', function () {
    var todo = require('gulp-todo');

    gulp.src('src/**/*.*')
        .pipe(todo())
        .pipe(gulp.dest('./'));
});


gulp.task('sizes', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css'
    ]).pipe(size());
});

function makeJade() {
    templateCache = templateCache || require('gulp-angular-templatecache');
    minifyHTML = minifyHTML || require('gulp-minify-html');
    changed = changed || require('gulp-changed');
    jade = jade || require('gulp-jade');

    return gulp.src(src.jade)
        .pipe(changed(dest.templates, {extension: '.html'}))
        .pipe(jade({pretty: false}))
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(templateCache({
            module: 'angular-pd.templates',
            standalone: true
        }))
}

function makeCoreJS() {
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    concat = concat || require('gulp-concat');

    return gulp.src(src.coreJs)
        .pipe(concat('datepicker-core.js'))
}

function makeViewJS() {
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    concat = concat || require('gulp-concat');

    return gulp.src(src.viewJs)
        .pipe(concat('angular-view.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
}

function makeJS() {
    mergeStream = mergeStream || require('merge-stream');
    concat = concat || require('gulp-concat');
    order = order || require('gulp-order');

    var coreJs = makeCoreJS();
    var viewJs = makeViewJS();

    return mergeStream(coreJs, viewJs)
        .pipe(order([
            'datepicker-core.js',
            'angular-view.js'
        ]))
        .pipe(concat('angular-pure-datepicker.js'));
}

function mergeJS(templates, mainJs) {
    mergeStream = mergeStream || require('merge-stream');
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    concat = concat || require('gulp-concat');

    return mergeStream(templates, mainJs)
        .pipe(concat('angular-pure-datepicker.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'angular-pure-datepicker.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist));
}

function buildJS() {
    var templates = makeJade();
    var mainJs = makeJS();
    return mergeJS(templates, mainJs);
}

gulp.task('js', function () {
    return buildJS();
});

gulp.task('stylus', function () {
    cssBase64 = cssBase64 || require('gulp-css-base64');
    minifyCss = minifyCss || require('gulp-minify-css');
    nib = nib || require('nib');
    stylus = stylus || require('gulp-stylus');
    concat = concat || require('gulp-concat');

    return gulp.src(src.styles, {base: 'src'})
        .pipe(concat('angular-pure-datepicker.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(cssBase64({
            baseDir: "img"
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
    watch = watch || require('gulp-watch');

    gulp.watch(src.jade, ['js', 'todo']);
    gulp.watch(src.styles, ['stylus', 'todo']);
    gulp.watch(src.coreJs, ['js', 'todo']);
    gulp.watch(src.viewJs, ['js', 'todo']);
});

gulp.task('build', function () {
    gulp.start('stylus');
    gulp.start('js');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});