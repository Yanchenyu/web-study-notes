$npm install grunt-contrib-watch --save-dev

module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),
      
      watch: {
         scripts: {
            files: '**/*.js',
            tasks: ['jshint'],
            options: {
               interrupt: true,
            }
         },
      },
  })

  
};


$grunt watch