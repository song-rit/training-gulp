var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

//short syntax

// gulp.task('coffee', function(){
// 	gulp.src('src/*.coffee')
// 	.pipe(coffee())
// 	.pipe(gulp.dest('src'));
// });

// gulp.task('script', ['coffee'], function() {
// 	gulp.src('src/*.js')
// 	.pipe(concat('all.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist'));
// });

//long syntax

gulp.task('script', function() {
	var coffeeJs = gulp.src('src/*.coffee')
		.pipe(coffee());

	var js = gulp.src('src/*.js');

	return es.merge(coffeeJs, js)
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('src/*.{js,coffee}', ['script']);
});