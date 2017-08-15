var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function(){
    gulp.src('./src/**/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
});

gulp.task('sass', function() {
  gulp.src('./src/*.sass')
    .pipe(sass({
     	pretty:true
     }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/*.pug', ['pug'])
    gulp.watch('./src/*.sass', ['sass'])
});


gulp.task('default', ['sass', 'pug', 'watch']);