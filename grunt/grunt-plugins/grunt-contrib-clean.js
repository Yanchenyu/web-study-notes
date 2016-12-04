$npm install grunt-contrib-clean --save-dev

module.exports = function(grunt){

grunt.loadNpmTasks('grunt-contrib-clean');

grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),
	//Short

	clean: ['path/to/dir/one', 'path/to/dir/two'];

	//Medium (specific targets with global options)

	clean: {
	  build: ['path/to/dir/one', 'path/to/dir/two'],
	  release: ['path/to/another/dir/one', 'path/to/another/dir/two']
	};


	//Long (specific targets with per target options)

	clean: {
	  build: {
	    src: ['path/to/dir/one', 'path/to/dir/two']
	  }
	}


})




}
