const   gulp = require("gulp"),
        concat = require('gulp-concat'),
        prefix = require('gulp-autoprefixer'),
        sass = require('gulp-sass')(require('sass')),
        pug = require('gulp-pug'),
        livereload = require('gulp-livereload'),
        sourcemaps = require('gulp-sourcemaps'),
        zip = require('gulp-zip'),
        notify = require('gulp-notify')
        watch  = require('gulp-watch')
        series = require('gulp');

gulp.task('html' , function(){
    return gulp.src('stoge/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(livereload())
    .pipe(gulp.dest('dist/html'))
})
gulp.task('css' , function(){
    return gulp.src(['stoge/css/**/*.scss','stoge/css/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix())
    .pipe(concat('./dist/css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('js',function(){
    return gulp.src('stoge/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

gulp.task('watch',function(){
    require('./server')
    livereload.listen()
    gulp.watch(['stoge/pug/*.pug','stoge/pug/**/*.pug'], gulp.series('html'))
    gulp.watch(['stoge/css/**/*.css','stoge/css/**/*.scss'], gulp.series('css'))
    gulp.watch('stoge/js/*.js', gulp.series('js'))
})