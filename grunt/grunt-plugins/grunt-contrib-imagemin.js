$npm install grunt-contrib-imagemin --save-dev


module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);



grunt.initConfig({
	  imagemin: {                          // Task
	    static: {                          // Target
	      options: {                       // Target options
	        optimizationLevel: 3,			//图片优化等级
	        
	      },
	      files: {                         // Dictionary of files
	        'dist/img.png': 'src/img.png', // 'destination': 'source'
	        'dist/img.jpg': 'src/img.jpg',
	        'dist/img.gif': 'src/img.gif'
	      }
	    },
	    dynamic: {                         
	      files: [{
	        expand: true,                  
	        cwd: 'src/',                   // Src目录下
	        src: ['**/*.{png,jpg,gif}'],   // 图片格式
	        dest: 'dist/'                  // 压缩到目标文件
	      }]
	    }
	  }
	});

	

}


$grunt imagemin