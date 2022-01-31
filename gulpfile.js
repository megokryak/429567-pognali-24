import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import csso from 'postcss-csso';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import squoosh from 'gulp-libsquoosh';
import rename from 'gulp-rename';
import del from 'del';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//styleForDev

const stylesDev = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//del

const cleaner = () => {
  return del('build');
}

// Scripts

const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
}


//html

const html = () => {
  return gulp.src('source/*html')
  .pipe(gulp.dest('build'));
}

// Fonts

const fonts = () => {
  return gulp.src('source/fonts/*.{woff2,woff}')
  .pipe(gulp.dest('build/fonts'));
}

//IMG

const images = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'));
}

//svg
// Так как не делал в проекте спрайт, то я закоментировал таск, место нее поставлю копию svg

// const svg = () => {
//   return gulp.src('source/img/**/*.svg')
//   .pipe(svgstore({
//     inlineSvg: true
//   }))
//   .pipe(rename('sprite.svg'))
//   .pipe(gulp.dest('build/img'));
// }

const svg = () => {
  return gulp.src('source/img/**/*.svg')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'));
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}

export const build = gulp.series(
  cleaner,
  gulp.parallel(
    html,
    images,
    svg,
    stylesDev,
    fonts,
    scripts
  )
);

export default gulp.series(
  styles, server, watcher
);
