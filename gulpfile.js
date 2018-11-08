const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

// const babel = require('gulp-babel');
//const errorHandler = require('gulp-error-handle');

gulp.task('sass', function () {
    gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watcher', function () {
    gulp.watch('./scss/style.scss' ['sass']);
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('js/ES6/scriptes6.js', ['babel']);
});

gulp.task('babel', function (){
    gulp.src('js/ES6/scriptes6.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('js/ES5/scriptes5.js'))
});

gulp.task('default', ['babel', 'sass', 'watcher']);
