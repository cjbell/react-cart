var gulp = require("gulp");
var browserify = require("gulp-browserify");
var reactify = require("reactify");
var watchify = require("watchify");
var concat  = require("gulp-concat");

gulp.task("js", function() {
  gulp.src(["./src/main.js"])
    .pipe(browserify({
      transform: ["reactify"],
      extensions: ['.jsx']
    }))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./build"));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.jsx', ['js']);
});

gulp.task('default', ['js', 'watch']);