var nunjucksRender = require('gulp-nunjucks-render');
var removeCode = require('gulp-remove-code');
var data = require("gulp-data");

module.exports = function (gulp, plugins) {
    return function () {
       gulp.src('app/**/*.+(html|nunjucks)')
       .pipe(data(function() {
          return {
              data: require('../app/data/data.json'),
          }
      }))
      .pipe(nunjucksRender({
           path: ['app/templates']
        }))
      .pipe(gulp.dest('.tmp'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }))
    };
};
