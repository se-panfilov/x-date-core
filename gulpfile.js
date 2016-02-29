'use strict';

var gulp = require('gulp');
const size = require('gulp-filesize');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const todo = require('gulp-todo');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const install = require("gulp-install");
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const wrap = require('gulp-wrap');
const stripCode = require('gulp-strip-code');
const watch = require('gulp-watch');

var src = 'src/*.js';

var dest = {
    dist: 'dist',
    src: 'src'
};

gulp.task('install', function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('lint', function () {
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

gulp.task('test', function (cb) {
    return gulp.src('./dist/x-date-core.test_only.js')
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
            gulp.src('./tests/*.js')
                .pipe(mocha())
                .pipe(istanbul.writeReports()) // Creating the reports after tests ran
                //.pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
                .on('end', cb);
        });
});

gulp.task('todo', function () {
    var sources = 'src/**/*.js';
    var tests = 'tests/**/*.js';
    return gulp.src([sources, tests])
        .pipe(todo())
        .pipe(gulp.dest('./'));
});

gulp.task('sizes', function () {
    return gulp.src([
        'dist/**/*.js'
    ]).pipe(size());
});

gulp.task('js', function () {
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
    return gulp.watch(src, ['js', 'todo']);
});

gulp.task('build', function () {
    return gulp.start('js');
});

gulp.task('default', function () {
    gulp.start('build');
    return gulp.start('watch');
});