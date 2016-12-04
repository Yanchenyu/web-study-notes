$npm install grunt-contrib-cssmin --save-dev


module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			option:{
				//和uglify用法一样
			},
			target: {
			    files: {
			      'output.css': ['foo.css', 'bar.css']
			    },
			    files: {[
				    expand: true,        // 启用下面的选项
				    cwd: 'release/css/',    // 指定待压缩的文件路径
				    src: ['*.css', '!*.min.css'],    // 匹配相对于cwd目录下的所有css文件(排除.min.css文件)
				    dest: 'release/css/',    // 生成的压缩文件存放的路径
				    ext: '.min.css'        // 生成的文件都使用.min.css替换原有扩展名，生成文件存放于dest指定的目录中

			    ]}
			    //二选一
			    
		  	}
		}

	})

}


$grunt cssmin