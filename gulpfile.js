'use strict';
var gulp = require('gulp'),
  connect = require('connect'),
  connectreload = require('connect-livereload'),
  livereload = require('gulp-livereload'),
  serveStatic = require('serve-static'),
  serveIndex = require('serve-index'),
  opn = require('opn'),
  react = require('gulp-react'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream');

/* connect */
gulp.task('connect', function () {
  var app = connect()
    .use(connectreload({port: 35729}))
    .use(serveStatic('./'))
    .use(serveIndex('./example/example.html'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000/example/example.html');
    });
});

/* browserify */ 
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./example/example.js'], // Only need initial file
    transform: [reactify], // Convert JSX to javascript
    debug: true, cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher  = watchify(bundler);

  return watcher
  .on('update', function () { // On update When any files updates
    var updateStart = Date.now();
        watcher.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./example/'));
        console.log('Updated ', (Date.now() - updateStart) + 'ms');
  })
  .bundle() // Create initial bundle when starting the task 
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./example/'));
});


/* serve */
gulp.task('serve', ['watch', 'browserify','react'], function () {
    opn('http://localhost:9000/example/example.html');
});

/* watch */
gulp.task('watch', ['connect'], function () {

  livereload.listen();

  gulp.watch([
    './*.html',
    './*.css',
    './js/*.js'
  ]).on('change', livereload.changed);  

  gulp.watch('./jsx/*.jsx', ['react']);
  
});


gulp.task('react', function () {

  return gulp.src('./jsx/*.jsx')
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./js/'));
});

/* default */
gulp.task('default', ['serve'], function () {
});

