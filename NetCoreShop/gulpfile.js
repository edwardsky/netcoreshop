/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    sass = require("gulp-sass"); // добавляем модуль sass

var paths = {
    webroot: "./wwwroot/"
};

// регистрируем задачу для конвертации файла scss в css
gulp.task("sass", function () {
    return gulp.src(paths.webroot + '/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(paths.webroot + '/scss/'));
});


const minify = require('gulp-minify');

gulp.task('min-js', function () {
    return gulp.src(paths.webroot + '/*.js')
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true,
            ignoreFiles: ['*min.js']
        }))
        .pipe(gulp.dest(paths.webroot + "/min"));
});

const htmlmin = require('gulp-htmlmin');

gulp.task('min-html', function () {
    return gulp.src(paths.webroot + '/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.webroot + "/min"));

});