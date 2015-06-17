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
var typescript = require('gulp-typescript');
var templateCache = require('gulp-angular-templatecache');
var mergeStream = require('merge-stream');
var cssBase64 = require('gulp-css-base64');
//var typescriptlint = require('gulp-typescriptlint');

var src = {
    styles: ['src/styles/**/*.styl'],
    jade: ['src/templates/**/*.jade'],
    html: ['src/templates/**/*.html'],
    js: ['src/**/*.js'],
    typescript: ['src/**/*.ts']
};

var dest = {
    dist: 'dist',
    src: 'src',
    templates: 'src/templates'
};

//gulp.task('lint', function () {
//TODO (S.Panfilov) typescript lint?
//    gulp.src(src.typescript)
//        .pipe(coffeelint({
//            max_line_length: false
//        }))
//        .pipe(coffeelint.reporter())
//});

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
            module: 'bdate.templates',
            standalone: true
        }))
}

function makeTypeScript() {
    return gulp.src(src.typescript)
        .pipe(typescript({bare: true}))
        .on('error', console.log)
        .pipe(concat('bdate.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
}

function mergeJS (templates, mainJs) {
    return mergeStream(templates, mainJs)
        .pipe(concat('bdate.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'bdate.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
}

function buildJS() {
    var templates = makeJade();
    var mainJs = makeTypeScript();
    return mergeJS(templates, mainJs);
}


gulp.task('typescript', function () {
    return buildJS();
});

gulp.task('stylus', function () {
    return gulp.src(src.styles, {base: 'src'})
        .pipe(concat('bdate.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(cssBase64({
            baseDir: "img"
        }))
        .on('error', console.log)
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
    gulp.watch(src.jade, ['typescript']);
    gulp.watch(src.styles, ['stylus']);
    gulp.watch(src.typescript, ['typescript']);
});

gulp.task('build', function () {
    gulp.start('stylus');
    gulp.start('typescript');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});