var gulpfile = require('gulp');
var sass = require('gulp-sass');
var gulp =require("gulp");
const browserSync = require('browser-sync').create();

gulpfile.task('style', function () {
    return gulpfile.src('./_src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpfile.dest('./css'));
});



gulp.task('watch', function () {
    gulp.watch('./_src/**/*.scss', gulp.series("style"));
});
gulp.task('serve', function () {
    return browserSync.init({
        server: {
            basedir: './'
        }

    })
});

browserSync.watch('./_src/**/*.scss').on('change', browserSync.reload);
gulp.task('dev', gulp.series(
    gulp.series("style"),
    gulp.parallel('serve', 'watch')
    )
);