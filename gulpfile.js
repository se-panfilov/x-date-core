var gulp, jade, watch, connect, minifyHTML;

gulp.task('jade', function () {
    jade = jade || require('gulp-jade');
    minifyHTML = minifyHTML || require('gulp-minify-html');

    return gulp.src('./*.jade')
        .pipe(jade({pretty: false}))
        .on('error', console.log)
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./*.jade', ['jade']);
});

gulp.task('build', function () {
    gulp.start('jade');
});

gulp.task('webserver', function () {
    connect = connect || require('gulp-connect');

    connect.server({
        root: [__dirname],
        port: 8001,
        livereload: true
    });
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});