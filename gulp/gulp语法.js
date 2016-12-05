1 , gulp.src(globs[, options])

//options可以为buffer,read,base;格式为{buffer: ''}

//如：

gulp.src('client/js/**/*.js') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
  .pipe(minify())
  .pipe(gulp.dest('build'));  // 写入 'build/somedir/somefile.js'

gulp.src('client/js/**/*.js', { base: 'client' })
  .pipe(minify())
  .pipe(gulp.dest('build'));  // 写入 'build/js/somedir/somefile.js'


2, gulp.dest(path[, options])

//option可以为{cwd: ''}，相对路径

gulp.src('./client/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./build/templates'))
  .pipe(minify())
  .pipe(gulp.dest('./build/minified_templates'));


3 , gulp.task(name[, deps], fn)

//name为将要执行任务的名字，
//deps是在执行name之前必须要先执行的任务，可以是数组，请一定要确保你所依赖的任务列表中的任务都使用了正确的异步执行方式：使用一个 callback，或者返回一个 promise 或 stream
//fn为该函数定义任务所要执行的一些操作。

异步任务支持

任务可以异步执行，如果 fn 能做到以下其中一点：

	接受一个 callback

	// 在 shell 中执行一个命令
	var exec = require('child_process').exec;
	gulp.task('jekyll', function(cb) {
	  // 编译 Jekyll
	  exec('jekyll build', function(err) {
	    if (err) return cb(err); // 返回 error
	    cb(); // 完成 task
	  });
	});


	返回一个 stream

	gulp.task('somename', function() {
	  var stream = gulp.src('client/**/*.js')
	    .pipe(minify())
	    .pipe(gulp.dest('build'));
	  return stream;
	});


	返回一个 promise

	var Q = require('q');

	gulp.task('somename', function() {
	  var deferred = Q.defer();

	  // 执行异步的操作
	  setTimeout(function() {
	    deferred.resolve();
	  }, 1);

	  return deferred.promise;
	});


	现在有两个task，one和two，我希望他们能按顺序执行，则：

	var gulp = require('gulp');

	// 返回一个 callback，因此系统可以知道它什么时候完成
	gulp.task('one', function(cb) {
	    // 做一些事 -- 异步的或者其他的
	    cb(err); // 如果 err 不是 null 或 undefined，则会停止执行，且注意，这样代表执行失败了
	});

	// 定义一个所依赖的 task 必须在这个 task 执行之前完成
	gulp.task('two', ['one'], function() {
	    // 'one' 完成后
	});

	gulp.task('default', ['one', 'two']);



4，gulp.watch(glob[, opts], tasks)

	//glob表示文件，
	//tasks表示要执行的任务名，可以为数组，gulp.task() 创建的 task 的名字，

	var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
	
	watcher.on('change', function(event) {
	  	
	  	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	
	});









