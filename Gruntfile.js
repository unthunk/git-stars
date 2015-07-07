'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // nodemon config
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
            env: {
              ENV: '/www'
            },
            watch: [
                'www',
                'bower_components'
            ]
        }
      }
    }

  });

grunt.registerTask('default', [
  'server'
]);

grunt.registerTask('test', [
  // stub for running tests
]);

grunt.registerTask('server', [
  'nodemon'
]);

};
