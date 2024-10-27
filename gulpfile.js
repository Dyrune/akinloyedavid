// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uncss = require('gulp-uncss');

// Task to compile SCSS to CSS
gulp.task('sass', () => {
  return gulp.src('src/sass/main.scss') // Path to your main SCSS file
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Output directory for compiled CSS
});

// Task to remove unused CSS with UnCSS
gulp.task('uncss', () => {
  return gulp.src('dist/css/main.css') // Compiled CSS file from the previous task
    .pipe(uncss({
      html: ['public/**/*.html'] // Path to your HTML files to check for used CSS
    }))
    .pipe(gulp.dest('dist/css')); // Output directory for cleaned CSS
});

// Combined task to compile SCSS and then clean unused CSS
gulp.task('build', gulp.series('sass', 'uncss'));

// Optional: Watch task to automatically compile SCSS on file changes
gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('build')); // Watches all SCSS files
});
