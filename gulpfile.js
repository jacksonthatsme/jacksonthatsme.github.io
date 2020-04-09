// Define variables
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Register Tasks
gulp.task('sass', function() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('js:vendor', function(){
  return gulp.src(['./assets/scripts/vendor/*.js'])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./assets/js/'));
});

gulp.task('js:custom', function() {
  return gulp.src('./assets/scripts/*.js')
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('js', ['js:vendor', 'js:custom']);

gulp.task('build', ['sass','js']);

gulp.task('default', ['build']);

gulp.task('watch', function(){
  gulp.watch('./assets/scss/**/*.scss', ['build']);
  gulp.watch('./assets/scripts/*.js', ['build']);
});
