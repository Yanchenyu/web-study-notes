$npm install grunt-contrib-concat --save-dev

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {

			options: {
		      separator: ';',   //文件用分号分隔开
		      banner: '',
		      footer: '', //用法和前面一样
		      stripBanners: true  //stripBanners 如果为true，去除代码中的块注释，默认为false
		    },
		    dist: {
		      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
		      dest: 'dist/built.js',
		    }

		}

	})

}


$grunt concat