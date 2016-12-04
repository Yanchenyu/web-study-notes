$npm install grunt-contrib-copy --save-dev

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		copy: {
			main: {
				files:[
					{
						expands: true,
						cwd: 'source', //相对目录为source
						src: 'app/*', //待拷贝的文件：source/app/....
						dest: 'dest', //拷贝到dest文件夹下，拷贝后目录：dest/app/...
						filter: 'isFile'
					}
				]
			}
		}
	})

	//多种写法：
	grunt.initConfig({
		copy: {
			main: {
				
						expands: true,
						cwd: 'source', //相对目录为source
						src: '**', //待拷贝的文件：source/....
						dest: 'dest', //拷贝到dest文件夹下，拷贝后目录：dest/...
						filter: 'isFile'
					
			}
		}
	});

	grunt.initConfig({
		copy: {
			main: {
				
						expands: true,
						src: 'source/*', //待拷贝的文件：source/....
						dest: 'dest', //拷贝到dest文件夹下，拷贝后目录：dest/source/...
						filter: 'isFile'
					
			}
		}
	});

};


$grunt copy