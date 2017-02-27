// https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/
var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  child = require('child_process'),
  browserSync = require('browser-sync').create(),
  browserSyncReload = browserSync.reload,
  yamlConfig = require('js-yaml'),
  fs = require('fs'),
  config = yamlConfig.safeLoad(fs.readFileSync('_config.yml'));

function jekyllLogger(jekyll) {
  var
    logger;

  logger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function (message) {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
}

// jekyll build
gulp.task('jekyll', function () {
  var
    jekyll;

  jekyll = child.spawn('jekyll', ['build',
    '--watch'
  ]);

  jekyllLogger(jekyll);
});

// jekyll serve
gulp.task('jekyll:serve', function () {
  var
    jekyll;

  jekyll = child.spawn('jekyll', ['serve',
    '--watch'
  ]);

  jekyllLogger(jekyll);
});

// serve the application
gulp.task('serve', ['jekyll:serve'], function () {
  gutil.log('DIRETORIO ===> ', config.destination);
  browserSync.init({
    server: {
      reloadDelay: 2000,
      baseDir: config.destination
    }
  });

  // Observa arquivos mudaram e sincronica com o navegador
  gulp.watch(config.destination + '/**/*')
    .on('change', browserSyncReload);
});

gulp.task('default', ['serve']);

// gulp.task('serve', ['jekyll:serve'], function() {
//  browserSync.init({
    // files: [config.siteRoot + '/**'],
    // port: config.port
    // proxy: 'dev.carlohcs.com.br:9001'
  // })
// });

