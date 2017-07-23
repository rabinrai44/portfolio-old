var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    browserSync   = require('browser-sync').create();;


gulp.task('watch', function() {

// Setting up browserSync
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

// Watching for index file
  watch('./app/index.html', function() {
    browserSync.reload();
  });

// Watching if styles files changes
  watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
  });

  // Watching if JS file changes
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'],   function() {
  browserSync.reload();
});
