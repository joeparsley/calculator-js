var gulp = require('gulp');
var browserify = require('browserify');
var source  = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;

// Test Gulp task
gulp.task('myTask', function() {
  console.log("wizards");
})

// build task for browserify
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/back-end.js', './js/front-end.js'] })
    .bundle()
    .pipe(source('export.js'))
    .pipe(gulp.dest('./build/js'));
});

// concat
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-end.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

// minifying
gulp.task("minifyScripts", ["jsBrowserify"], function() {
  return gulp.src("./build/js/export.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
})

// build task
gulp.task("build", function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
})

// del / clean task
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

// js hint
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
