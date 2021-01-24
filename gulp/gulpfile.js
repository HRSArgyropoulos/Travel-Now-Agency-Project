const gulp = require('gulp');

// plugins
const imagemin = require('gulp-imagemin');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}
exports.default = defaultTask

gulp.task('compress-imgs' , () => {
  return gulp.src('../images/*/*')
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 4
  }))
  .pipe(gulp.dest('../afterimages'));
})

