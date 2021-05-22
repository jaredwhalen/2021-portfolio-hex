var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var useref = require('gulp-useref');


module.exports = function (gulp, plugins) {
    return function () {
      return gulp
          // .src(['.tmp/*.html', '.tmp/images/**/*', '.tmp/projects/**'], {
          //     base: '.tmp'
          // })
          .src(['.tmp/*.html'])
         .pipe(useref())
         .pipe(plugins.gulpIf('*.css', cssnano()))
         .pipe(gulp.dest('build'))
    };
};
