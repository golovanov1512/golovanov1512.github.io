var gulp = require("gulp"),
  sass = require("gulp-sass"),
  slim = require("gulp-slim");

gulp.task("sass", function() {
  return gulp
    .src("app/src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/build/css"));
});

gulp.task("slim", function() {
  return gulp
    .src("app/src/slim/*.slim")
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest("app/build"));
});

gulp.task("watch", function() {
  gulp.watch("app/src/sass/**/*.scss", ["sass"]);
  gulp.watch("app/src/slim/**/*.slim", ["slim"]);
});
