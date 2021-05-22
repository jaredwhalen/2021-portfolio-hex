module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('./assets/**/*')
    .pipe(gulp.dest('build'))
  };
};
