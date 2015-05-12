var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
  gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('build/'));
});

gulp.task('build_test', ['build'] ,function () {
  gulp.src('tests/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('build/tests'));
})

gulp.task('watch', function () {
  gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('dev', ['build', 'build_test', 'watch'])
