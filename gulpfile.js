'use strict';

var gulp = require('gulp'), concat, rename, uglify, jade, sourcemaps, watch, changed,
    ngAnnotate, stylus, nib, minifyHTML, minifyCss, templateCache, mergeStream,
    cssBase64, size, tslint, stylish, cleanTs;

var src = {
    styles: ['src/templates/**/*.styl'],
    jade: ['src/templates/**/*.jade'],
    html: ['src/templates/**/*.html'],
    js: ['src/**/*.js']
};

var dest = {
    dist: 'dist',
    src: 'src',
    templates: 'src/templates'
};

gulp.task('lint', function () {
    tslint = tslint || require('gulp-tslint');
    stylish = stylish || require('gulp-tslint-stylish');

    return gulp.src(src.ts)
        .pipe(tslint())
        .pipe(tslint.report(stylish, {
            emitError: false
        }));
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
        .on('error', console.log)
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(templateCache({
            module: 'angular-pd.templates',
            standalone: true
        }))
}

function makeJS() {
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    concat = concat || require('gulp-concat');

    return gulp.src(src.js)
        .on('error', console.log)
        .pipe(concat('angular-pure-datepicker.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
}

function mergeJS(templates, mainJs) {
    mergeStream = mergeStream || require('merge-stream');
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    cleanTs = cleanTs || require('gulp-clean-ts-extends');
    concat = concat || require('gulp-concat');

    return mergeStream(templates, mainJs)
        .pipe(concat('angular-pure-datepicker.js'))
        .pipe(cleanTs())
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'angular-pure-datepicker.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
}

function buildTS() {
    var templates = makeJade();
    var mainJs = makeTypeScript();
    return mergeJS(templates, mainJs);
}

gulp.task('ts', function () {
    return buildTS();
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
        .on('error', console.log)
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
    watch = watch || require('gulp-watch');

    gulp.watch(src.jade, ['ts', 'todo']);
    gulp.watch(src.styles, ['stylus', 'todo']);
    gulp.watch(src.ts, ['ts', 'todo']);
});

gulp.task('build', function () {
    gulp.start('stylus');
    gulp.start('ts');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});