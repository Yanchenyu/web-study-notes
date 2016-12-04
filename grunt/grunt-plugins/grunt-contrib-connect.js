$npm install grunt-contrib-connect --save-dev

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {

			server: {
			      options: {
				        port: 8080,
				        base: {
					          path: 'www-root',
					          options: {
					            index: 'somedoc.html',
					            maxAge: 300000
					          }
				        }
			      }
		    }

		}

	})

}


$grunt connect