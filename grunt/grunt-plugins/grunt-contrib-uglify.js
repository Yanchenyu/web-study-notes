$npm install grunt-contrib-uglify --save-dev

module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {

			option:{
				banner: '/*! 包名：<%= pkg.name %> - 版本号v：<%= pkg.version %> */\n', //压缩文件头部添加注释
                			
        		footer:	'\n/*! 修改日期：<%= grunt.template.today("yyyy-mm-dd") %> */', //压缩尾部添加注释，\n是换行			

        		preserveComments: false //删除所有注释，也可以为all，不删除注释，也可以为some，（保留@preserve @license @cc_on等注释）
			
			},

			my_target: {
				files: {
					'dest/index.min.js' : ['dest/index.js']
					//'dest/index.min.js' : ['dest/index_1.js','dest/index_2.js']
				},
				files: [{
	                    expand:true,
	                    cwd:'js',//js目录下
	                    src:'**/*.js',//所有js文件
	                    dest: 'output/js'//将目录下所有的js文件全部压缩输出到此目录下
                }]
                //两种files写法，只能写一个
			}

			


		}

	})

}


$grunt uglify