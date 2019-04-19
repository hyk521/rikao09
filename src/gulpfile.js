const gulp = require('gulp');
const webserver = require('gulp-webserver');
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(webserver({
            prot: 3000,
            livereload: true
        }))
})