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
    },

    // clean up build folders
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*'
          ]
        }]
      }
    },

    // minify css
    cssmin: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/app.min.css' : [
            'bower_components/skeleton-css/css/normalize.css',
            'bower_components/skeleton-css/css/skeleton.css',
            'www/css/app.css'
          ]
        }
      }
    },

    // process index.html file for dist
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['www/index.html']
        }
      }
    },

    // lint the js for issues
    jshint: {
      all: [ 'www/app/**/*.js' ]
    },

    // combine the js files
    concat: {
      dist: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-resource/angular-resource.min.js',
          'www/app/app.js',
          'www/app/**/*.js'
        ],
        dest: 'dist/js/app.js',
      }
    },

    // minify the js
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/js/app.min.js': [ 'dist/js/app.js' ]
        }
      }
    },

    // copy over otherwise unhandled files
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'www/app',
            src: ['**/*.html'],
            dest: 'dist/app'
          }
        ]
      }
    },

    // karma config
    karma: {
      options: {
        configFile: 'config/karma.conf.js'
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

grunt.registerTask('dist',[
  'clean:dist',
  'cssmin:dist',
  'concat:dist',
  'uglify:dist',
  'copy:dist',
  'processhtml:dist'
]);

};
