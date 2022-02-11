const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gcmq = require("gulp-group-css-media-queries");
const cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");

// Hot reload
gulp.task("sync", () => {
  browserSync.init({
    server: {
      index: "index.html",
      open: false,
    },
  });

  //Action sur les fichiers HTML
  gulp.watch("**/*.html").on("change", browserSync.reload);

  gulp.watch("scss/**/*.scss", gulp.series("styles"));

  //Action sur les fichiers js
  gulp.watch("js/**/*.js").on("change", browserSync.reload);
});

gulp.task("styles", () => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gcmq())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
});

gulp.task("minicss", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("css/"));
});

gulp.task("default", gulp.series("sync"));
