var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')

gulp.task('script', function() {
	gulp.src('js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});