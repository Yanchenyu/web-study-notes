$npm install grunt-contrib-jshint --save-dev

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {

			all: [
				'test/index.js'
			],
			options: {
			      curly: true,
			      eqeqeq: true,
			      eqnull: true,
			      browser: true,
			      globals: {
			        jQuery: true
			      }
		    },

		}

	})

}


$grunt jshint