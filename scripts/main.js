
module.exports = function(context){
	var path = context.requireCordovaModule('path),
	    defer = context.requireCordovaModule('q').defer();

	var gulp = require('gulp'),
	    gulpFile = path.join(__dirname, 'gulpfile');

	require(gulpfile);

	gulp.start('after_prepare').stop('task_stop', function(){
	    
	    defer.resolve();
	});

	return defer;
}
