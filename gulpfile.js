var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync").create();
var clean = require("gulp-clean");

// plugin for lossy jpg compression
var imageminMozjpeg = require("imagemin-mozjpeg");

// Compile SCSS
gulp.task("css:compile", function() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(
      sass
        .sync({
          outputStyle: "expanded"
        })
        .on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 4 versions"]
      })
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

gulp.task("css:copy", function() {
  return gulp.src("./src/scss/*.css").pipe(gulp.dest("./public/css"));
});

// CSS
gulp.task("css", ["css:compile"]);

// Minify JavaScript
gulp.task("js:minify", function() {
  return gulp
    .src(["./src/js/*.js", "!./src/js/*.min.js"])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./public/js"))
    .pipe(browserSync.stream());
});

// JS
gulp.task("js", ["js:minify"]);

// Task to copy files and assets

// Optimize images
gulp.task("copy:images", function() {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      imagemin([
        imageminMozjpeg({
          quality: 90
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("./public/img"));
});

gulp.task("copy:favicons", function() {
  return gulp
    .src("./src/favicons/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./public/favicons"));
});

gulp.task("copy:files", function() {
  return gulp
    .src([
      "./src/*.*",
      "./src/*/*.woff",
      "./src/*/*.min.css",
      "./src/*/*.min.js",
      "!./src/**/*.html"
    ])
    .pipe(gulp.dest("./public/"));
});

// Files
gulp.task("copy", ["copy:images", "copy:favicons", "copy:files"]);

gulp.task("html:minify", function() {
  return gulp
    .src("./src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./public/"))
    .pipe(browserSync.stream());
});

gulp.task("html", ["html:minify"]);

// Configure the browserSync task
gulp.task("browserSync", ["build"], function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: "8080"
  });
});

// Clean /public
gulp.task("clean", function() {
  return gulp.src("public", { read: false }).pipe(clean());
});

// Dev task without copying
gulp.task("serve", ["css", "js", "html"], function() {
  gulp.watch("./src/scss/*.scss", ["css"]);
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("./src/**/*.html", ["html"]);
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: "8080"
  });
});

// Build task
gulp.task("build", ["css", "js", "copy", "html"]);

// Dev task
gulp.task("default", ["build", "browserSync"], function() {
  gulp.watch("./src/scss/*.scss", ["css"]);
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("./src/**/*.html", ["html"]);
});
