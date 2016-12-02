1，grunt-contrib-watch 
//功能：监听某一动作的发生，实时更新


npm install grunt-contrib-watch --save-dev
//安装


//Gruntfile.js：

	grunt.loadNpmTasks('grunt-contrib-watch');  
	// 在Gruntfile.js文件中加载Npm插件任务


	watch: {  
		copy: {  
		    files: '<%=config.app%>/**/*.html',  
		    tasks: ['copy:dest']  
		}
	}  
//在Gruntfile.js中配置watch，我们在之前学习安装Grunt时用到的grunt-contrib-copy插件的基础上来操作。


grunt watch
//执行


//完整Gruntfile.js代码：

'use strict'  
module.exports = function (grunt) {  
  
  
  // 计划执行Task所需要的时间  
  require('time-grunt')(grunt);  
  
  // 加载Task任务  
  //require('load-grunt-tasks')(grunt);  
  
  // 下面二句相当于它require('load-grunt-tasks')(grunt);  
  grunt.loadNpmTasks("grunt-contrib-copy");  
  grunt.loadNpmTasks("grunt-contrib-clean");  
  grunt.loadNpmTasks('grunt-contrib-watch');  
  
  
  var config = {  
    app: "app",  
    dist: "dist"  
  };  
  
  grunt.initConfig({  
  
    config: config,  
  
    watch: {  
      copy: {  
        files: '<%=config.app%>/**/*.html',  
        tasks: ['copy:dest']  
      }  
    },  
  
    // Task任务  
    copy: {  
      // 这是Task里的其中一个Target  
      dest: {  
        src:  '<%=config.app%>/newFolder/aa.html',  
        dest: '<%=config.dist%>/newFolder/cc.html'  
      }  
    },

    clean: {  
      dest: {  
        expand: true, // 动态匹配  
        src: '<%=config.dist%>/**/**'  
      }  
    }  
  
  });  
  
  // Task组合任务  
  grunt.registerTask("build", "description", function(dist){  
  
  
    grunt.task.run([  
      "copy:dest",  
      "clean:dest"  
    ]);  
  
  
  });  
  
  
  
  
};    