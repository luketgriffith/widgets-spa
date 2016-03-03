var gulp = require('gulp');
var gutil = require('gulp-util');
// require sass
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
// var watch = require('gulp-watch'),
var concat = require('gulp-concat');
var notify = require('gulp-notify');


gulp.task('sass', function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./main.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('cjs', function() {
  gulp.src('./controllers/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('sjs', function() {
  gulp.src('./services/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('default', ['sass', 'js', 'cjs', 'sjs']);