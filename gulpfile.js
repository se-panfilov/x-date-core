'use strict';

var gulp = require('gulp');
var size = require('gulp-filesize');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var todo = require('gulp-todo');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');
var stripCode = require('gulp-strip-code');
var watch = require('gulp-watch');
var codacy = require('gulp-codacy');
var fs = require("fs");
var prettify = require('gulp-jsbeautifier');

var src = 'src/*.js';

var dest = {
  dist: 'dist',
  src: 'src'
};

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

var getContent = function (path) {
  return fs.readFileSync(path, "utf8");
};


gulp.task('js', function () {

  var modules =
      'Config: ' + getContent('src/Config.js') + ', ' +
      '\n\rCommonUtils: ' + getContent('src/CommonUtils.js') + ',' +
      '\n\rDataClass: ' + getContent('src/DataClass.js') + ', ' +
      '\n\rDateModel: ' + getContent('src/DateModel.js') + ', ' +
      '\n\rDateUtils: ' + getContent('src/DateUtils.js') + ', ' +
      '\n\rDaysUtils: ' + getContent('src/DaysUtils.js') + ', ' +
      '\n\rLimitsModel: ' + getContent('src/LimitsModel.js') + ', ' +
      '\n\rMonthUtils: ' + getContent('src/MonthUtils.js') + ', ' +
      '\n\rYearsUtils: ' + getContent('src/YearsUtils.js');

  var moduleWrap =
      'var xDateCore = (function () {' +
      '\'use strict\';' +
      '\n\r    var x =  {' +
        //'\n\r<%= contents %>' +
      modules +
      '};' +
      'return x;' +
      '})();';

  return gulp.src('src/Config.js')
      .pipe(concat('x-date-core.js'))
      .pipe(wrap(moduleWrap))
      .pipe(stripCode({
        start_comment: "START.DEV_ONLY",
        end_comment: "END.DEV_ONLY"
      }))
      .pipe(stripCode({
        start_comment: "START.TESTS_ONLY",
        end_comment: "END.TESTS_ONLY"
      }))
      .pipe(prettify({
        indent_size: 2
      }))
      .pipe(gulp.dest(dest.dist))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({basename: 'x-date-core.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dest.dist));

});

gulp.task('pre-test', function () {
  return gulp.src(['./src/**/*.js'])
      // Covering files
      .pipe(istanbul())
      // Force `require` to return covered files
      .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['./tests/**/*.js'])
      .pipe(mocha())
      // Creating the reports after tests ran
      .pipe(istanbul.writeReports({
        dir: './coverage',
        reporters: ['lcov'],
        reportOpts: {dir: './coverage'}
      }))
      // Enforce a coverage of at least 90%
      .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}));
});

gulp.task('watch', function () {
  return gulp.watch(src, ['js', 'todo']);
});

gulp.task('build', function () {
  return gulp.start('js');
});

gulp.task('codacy', function () {
  fs.readFile('token.txt', 'utf-8', function (e, data) {
    return gulp.src(['coverage/coverage.lcov'])
        .pipe(codacy({token: data}))
        ;
  });

});

gulp.task('default', function () {
  gulp.start('build');
  return gulp.start('watch');
});