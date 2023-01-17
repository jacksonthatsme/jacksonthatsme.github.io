const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Register Tasks
function sassTask() {
  return src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./assets/css/'));
}

function jsVendorTask() {
  return src(['./assets/scripts/vendor/*.js'])
    .pipe(concat('vendor.js'))
    .pipe(dest('./assets/js/'));
}

function jsCustomTask() {
  return src('./assets/scripts/*.js')
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(dest('./assets/js/'));
}

const jsTask = parallel(jsVendorTask, jsCustomTask);
const buildTask = parallel(sassTask, jsTask);

exports.default = buildTask;
exports.watch = function() {
  watch('./assets/scss/**/*.scss', buildTask);
  watch('./assets/scripts/*.js', buildTask);
};