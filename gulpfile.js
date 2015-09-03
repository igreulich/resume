const browserSync = require('browser-sync');
const gulp        = require('gulp');
const babel       = require('gulp-babel');
const webpack     = require('webpack');

var reload = browserSync.reload;

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch([
    '*.html',
    'scripts/modules.js',
    'scripts/app.js',
    'stylesheets/vendor.css',
    'stylesheets/app.css'
  ], {cwd: 'app'}, reload);
});
