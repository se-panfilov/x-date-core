'use strict';

var gulp = require('gulp'), concat, rename, uglify, sourcemaps, watch, changed,
    size, install, jshint, stylish, todo, wrap;

var src = 'src/*.js';

var dest = {
    dist: 'dist',
    src: 'src'
};

gulp.task('install', function () {
    install = install || require("gulp-install");

    gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('lint', function () {
    jshint = jshint || require('gulp-jshint');
    stylish = stylish || require('jshint-stylish');

    return gulp.src(src)
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                //console: true
            }
        }))
        .pipe(jshint.reporter(stylish));
});
gulp.task('todo', function () {
    todo = require('gulp-todo');

    gulp.src('src/**/*.*')
        .pipe(todo())
        .pipe(gulp.dest('./'));
});

gulp.task('sizes', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'dist/**/*.js'
    ]).pipe(size());
});

gulp.task('js', function () {
    concat = concat || require('gulp-concat');
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    concat = concat || require('gulp-concat');
    wrap = wrap || require('gulp-wrap');


    var moduleWrap =
        'var xDateCore = (function () {' +
        '\n\r    var exports = {};' +
        '\n\r<%= contents %>' +
        '\n\r    if (typeof module === \'object\' && module.exports) {' +
        '\n\r        module.exports = exports;' +
        '\n\r    }' +
        '\n\r' +
        '\n\r    return exports;' +
        '})();';

    //TODO (S.Panfilov) add "changed" support
    return gulp.src(src)
        .pipe(concat('x-date-core.js'))
        .pipe(wrap(moduleWrap))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'x-date-core.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
    watch = watch || require('gulp-watch');
    gulp.watch(src, ['js', 'todo']);
});

gulp.task('build', function () {
    gulp.start('js');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});