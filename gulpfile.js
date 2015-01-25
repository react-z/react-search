'use strict';
var gulp = require('gulp'),
  connect = require('connect'),
  connectreload = require('connect-livereload'),
  livereload = require('gulp-livereload'),
  serveStatic = require('serve-static'),
  serveIndex = require('serve-index'),
  opn = require('opn'),
  react = require('gulp-react');


/* connect */
gulp.task('connect', function () {
  var app = connect()
    .use(connectreload({port: 35729}))
    .use(serveStatic('./'))
    .use(serveIndex('./'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});


/* serve */
gulp.task('serve', ['watch'], function () {
    opn('http://localhost:9000');
});

/* watch */
gulp.task('watch', ['connect'], function () {

  livereload.listen();

  gulp.watch([
    './*.html',
    './*.css',
    './*.js'
  ]).on('change', livereload.changed);  

  gulp.watch('./*.jsx', ['react']);
  
});


gulp.task('react', function () {
    return gulp.src('./*.jsx')
        .pipe(react({
            harmony: true
        }))
        .pipe(gulp.dest('./'));
});

/* default */
gulp.task('default', ['serve'], function () {
});

