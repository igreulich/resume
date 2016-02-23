'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');

gulp.task('react', function(callback) {
  const webpack     = require('webpack');
  const fs          = require('fs');
  const path        = require('path');
  const prettyBytes = require('pretty-bytes');
  const gzipSize    = require('gzip-size');
  let webpackConfig = require('./webpack.config.js');

  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  );

  webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    stats = stats.toString();

    // Remove dropping unused statements and individual modules built
    let tester = /Dropping unused(.*?)\n|\n(.*?)\[built\]/g;
    stats = stats.replace(tester, '');
    gutil.log('[webpack]', stats);

    // Iterate through all of the output files and print their gzipped sizes
    fs.readdir(path.resolve(__dirname, './app/scripts/dist/'), function(err, files) {
      let filesLength = files.length;
      gutil.log('gzipped file sizes:');
      files.forEach(function(file) {
        if (file.indexOf('.js') !== -1 && file.indexOf('.js') + 3 === file.length) {
          gutil.log(file + ': ' + prettyBytes(
            gzipSize.sync(fs.readFileSync(path.resolve(__dirname, '../admin/scripts/lite/', file)))
          ));
        }
      });

      gutil.log('[webpack]', new Date());
      callback();
    });
  });
});

gulp.task('react:watch', function() {
  const webpack     = require('webpack');
  let webpackConfig = require('./webpack.config.js');

  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  );

  webpackConfig.devtool = 'source-map';

  let compiler = webpack(webpackConfig);

  compiler.watch(200, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({}));
    gutil.log('[webpack]', new Date());
    gutil.log('THIS IS FOR DEVELOPMENT ONLY.');
    gutil.log('PLEASE BUILD NORMALLY BEFORE COMMITTING.');
  });
});

gulp.task('styles', function() {
  const less = require('gulp-less');

  gulp.src('./app/styles/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/styles/dist'));
});

gulp.task('styles:watch', function() {
  gulp.watch('./app/styles/less/**/*.less' , ['styles']);
});

gulp.task('server', function() {
  const browserSync = require('browser-sync');
  const reload      = browserSync.reload;

  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch([
    '*.html',
    'scripts/dist/vendor.bundle.js',
    'scripts/dist/app.js',
    'stylesheets/vendor.css',
    'stylesheets/app.css'
  ], {cwd: 'app'}, reload);
});

gulp.task('build', ['react', 'styles'])