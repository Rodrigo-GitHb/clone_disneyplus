const gulp =  require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imgmin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/imgs/**')
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/imgs'));
}

exports.default =  gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}