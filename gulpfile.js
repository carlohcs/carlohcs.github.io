// https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/
'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  child = require('child_process'),
  browserSync = require('browser-sync').create(),
  browserSyncReload = browserSync.reload,
  yamlConfig = require('js-yaml'),
  fs = require('fs'),
  config = yamlConfig.safeLoad(fs.readFileSync('./_config.yml')),
  gitDeploy = require('gulp-deploy-git');

function jekyllLogger(jekyll) {
  let
    logger;

  logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
}

// jekyll build
gulp.task('jekyll:build', () => {
  let
    jekyll;

  jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  jekyllLogger(jekyll);
});

// jekyll serve
gulp.task('jekyll:serve', () => {
  let
    jekyll;

  jekyll = child.spawn('jekyll', ['serve',
    '--watch'
  ]);

  jekyllLogger(jekyll);
});

// serve the application
gulp.task('serve', ['jekyll:build'], () => {
  browserSync.init({
    files: [config.destination + '/**'],
    port: config.port,
    server: {
      // proxy: config.host + ':' + config.port,
      reloadDelay: 2000,
      baseDir: config.destination
    }
  });

  // Observa arquivos mudaram e sincronica com o navegador
  // gulp.watch(config.destination + '/**/*')
  // .on('change', browserSyncReload);
});

// https://github.com/zhevron/gulp-deploy-git/issues/5
gulp.task('deploy', () => {
  let
    now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    day = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear(),
    dateHour = `${hours}:${minutes} ${day}/${month}/${year}`;

  //gulp.src([config.destination + '/**/*', '_config.yml',
  //    'composer.json', 'gulpfile.js',
  //    'gulpfile.js', 'package.json',
  //    'Procfile', 'README.md'
  //  ])
  // gulp.src(config.destination + '/**/*')
  //return gulp.src('./_gh_pages/')
  // return gulp.src('./_gh_pages/**/*', {
  return gulp.src([config.destination + '/', '_config.yml',
      'composer.json', 'gulpfile.js',
      'gulpfile.js', 'package.json',
      'Procfile', 'README.md'
    ], {
      read: false
    })
    .pipe(gitDeploy({
      repository: 'https://carlohcs@github.com/carlohcs/carlohcs.github.io.git',
      message: `[master] Deployed at ${dateHour}`,
      branches: ['gh-pages'],
      verbose: true,
      debug: true
    }));
});

gulp.task('default', ['serve']);

