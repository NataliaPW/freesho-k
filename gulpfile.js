var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var {
  src,
  dest,
  watch,
  parallel,
  series
} = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var browserSync = require('browser-sync').create();

/*конвертация файлов .html*/
function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
    notify: false
  })
}

/*конвертация файлов .scss*/
function styles() {
  return src('app/scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
     .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

/*конвертация файлов .js*/
function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

/*конвертация файлов картинок*/
function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

/*вызов функции*/
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, browsersync, watching);

/*gulp-concat*/
/* gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
}); */

/*gulp-autoprefixe*/
/*exports.default = () => (
	gulp.src('src/app.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);*/

/*gulp-uglify*/
/*gulp.task('compress', function () {
  return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
  );
});*/

// Static Server + watching scss/html files
/* gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./app"
  });

  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
}); */

// Compile sass into CSS & auto-inject into browsers
/* gulp.task('sass', function () {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']); */