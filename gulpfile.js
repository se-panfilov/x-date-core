'use strict';

var gulp = require('gulp'), concat, rename, uglify, sourcemaps, watch, changed,
    size, install, jshint, stylish, todo, wrap, mocha, istanbul, stripCode;

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

//gulp.task('test', function (cb) { //TODO (S.Panfilov) test coverage should be fixed
//    istanbul = istanbul || require('gulp-istanbul');
//    mocha = mocha || require('gulp-mocha');
//
//    gulp.src('dist/x-date-core.js')
//        .pipe(istanbul()) // Covering files
//        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
//        .on('finish', function () {
//            gulp.src('./test/*.js')
//                .pipe(mocha())
//                .pipe(istanbul.writeReports()) // Creating the reports after tests ran
//                .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
//                .on('end', cb);
//        });
//});

//gulp.task('test', function () {
//    var cover = require('gulp-coverage');//TODO (S.Panfilov)
//    mocha = mocha || require('gulp-mocha');
//
//    return gulp.src('./dist/x-date-core.js')
//        .pipe(cover.instrument({
//            pattern: ['./test/*js'],
//            debugDirectory: 'debug'
//        }))
//        .pipe(mocha())
//        .pipe(cover.gather())
//        .pipe(cover.format())
//        .pipe(gulp.dest('reports'));
//});

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
    stripCode = stripCode || require('gulp-strip-code');

    var moduleWrap =
        'var xDateCore = (function () {' +
        '\n\r    var exports = {};' +
        '\n\r<%= contents %>' +
        '\n\r    if (typeof module === \'object\' && module.exports) module.exports = exports;' +
        '\n\r' +
        '\n\r    return exports;' +
        '})();';

    //TODO (S.Panfilov) add "changed" support
    return gulp.src(src)
        .pipe(concat('x-date-core.test_only.js'))
        .pipe(wrap(moduleWrap))
        .pipe(gulp.dest(dest.dist))
        .pipe(stripCode({
            start_comment: "START.TESTS_ONLY",
            end_comment: "END.TESTS_ONLY"
        }))
        .pipe(rename({basename: 'x-date-core'}))
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