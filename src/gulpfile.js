const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pixelstorem = require('postcss-pixels-to-rem');
const rfs = require('rfs');

const options = {
	twoDimensional: false,
	baseValue: 20,
	unit: 'rem',
	breakpoint: 1200,
	breakpointUnit: 'px',
	factor: 10,
	class: false,
	unitPrecision: 6,
	safariIframeResizeBugFix: false,
	remValue: 16
};

gulp.task('default', () => {
	return gulp
		.src('./styles.css')
		.pipe(postcss([ rfs(options) ]))
		.pipe(gulp.dest('./public'));
});
