const { parallel } = require("gulp");
const gulp = require("gulp");

// plugins
const imagemin = require("gulp-imagemin");
const zip = require("gulp-zip");
const mq = require("gulp-group-css-media-queries");

gulp.task("css-mq", () => {
  return gulp.src("../css/*.css")
  .pipe(mq())
  .pipe(gulp.dest('dist/css'))
});

gulp.task("compress-imgs", () => {
  return gulp
    .src("../images/*/*")
    .pipe(
      imagemin({
        progressive: true,
        optimizationLevel: 4,
      })
    )
    .pipe(gulp.dest("dist/afterimages"));
});

gulp.task("zip", () => {
  return gulp
    .src([
      "../*.html",
      "../assets/*",
      "../css/*.css",
      "../images/*/*",
      "../js/*"],
      {base: "../"})
    .pipe(zip("cpanel.zip"))
    .pipe(gulp.dest("dist"));
});

exports.default = parallel("compress-imgs", "zip");
