var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-clean-css');
var del = require('del');




var paths = {
  coffeeScripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  scripts: 'client/js/*.js',
  images: 'client/img/**/*',
  htmls: 'client/*.html',
  css: ['client/style/*.css','!client/css/*.min.css']
};



// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});



gulp.task('coffeescripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.coffeeScripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});


gulp.task('scripts' , ['clean'] , function(){
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});



// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});


gulp.task('htmls',['clean'],function(){

    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };

    return gulp.src(paths.htmls)
        .pipe(htmlmin(options))
        .pipe(gulp.dest('build/html'));


});


gulp.task('cssmin',['clean'],function(){

    var options = {

    }

    return gulp.src(paths.css)
        .pipe(css({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));

});



// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});



// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'coffeescripts', 'images', 'htmls' , 'cssmin']);



