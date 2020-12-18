const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

const compileStyles = () => {
    return gulp
        .src('./src/scss/style.scss')
        .pipe(sass({
            noCache: true,
            precision: 4,
            outputStyle: 'expanded'
        }))
        .pipe(prefix('last 3 version'))
        .pipe(gulp.dest('./src/css'));
}

const watch = () => {
    gulp.watch('./src/scss/**/*.scss', compileStyles)
};

gulp.task('sass', compileStyles);
gulp.task('sass:watch', watch);