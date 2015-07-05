'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

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
