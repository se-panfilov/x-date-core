var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var ngAnnotate = require('gulp-ng-annotate');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var ts = require('gulp-typescript');
var templateCache = require('gulp-angular-templatecache');
var mergeStream = require('merge-stream');
var cssBase64 = require('gulp-css-base64');
//var typescriptlint = require('gulp-typescriptlint');
var size = require('gulp-filesize');

var src = {
    styles: ['src/templates/**/*.styl'],
    jade: ['src/templates/**/*.jade'],
    html: ['src/templates/**/*.html'],
    js: ['src/**/*.js'],
    ts: ['src/**/*.ts']
};

var dest = {
    dist: 'dist',
    src: 'src',
    templates: 'src/templates'
};

//gulp.task('lint', function () {
//TODO (S.Panfilov) typescript lint?
//    gulp.src(src.ts)
//        .pipe(coffeelint({
//            max_line_length: false
//        }))
//        .pipe(coffeelint.reporter())
//});


gulp.task('sizes_dist', function () {
    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css'
    ]).pipe(size());
});

function makeJade() {
    return gulp.src(src.jade)
        //.pipe(changed(dest.templates, {extension: '.html'}))
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

function makeTypeScript() {
    return gulp.src(src.ts)
        .pipe(ts({bare: true}))
        .on('error', console.log)
        .pipe(concat('angular-pure-datepicker.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
}

function mergeJS (templates, mainJs) {
    return mergeStream(templates, mainJs)
        .pipe(concat('angular-pure-datepicker.js'))
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
    gulp.watch(src.jade, ['ts']);
    gulp.watch(src.styles, ['stylus']);
    gulp.watch(src.ts, ['ts']);
});

gulp.task('build', function () {
    gulp.start('stylus');
    gulp.start('ts');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});