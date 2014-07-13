module.exports = function(grunt) {
    'use strict';

    // Displays the execution time of [grunt](http://gruntjs.com) tasks
    require('time-grunt')(grunt);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    appDir: "public",
                    dir: "dist",
                    mainConfigFile: 'public/scripts/main.js',
                    modules:[
                    {
                        name: 'main',
                        excludeShallow : ['home/dependency', 'about/dependency', 'contact/dependency']
                    },
                    {
                        name : 'home/dependency',
                        exclude: ['angular']
                    },
                    {
                        name : 'about/dependency',
                        exclude: ['angular']
                    },
                    {
                        name : 'contact/dependency',
                        exclude: ['angular']
                    }
                    ],
                    //optimize: "none",
                    optimize: "uglify2",
                    optimizeCss : "standard",
                    removeCombined : true,
                    preserveLicenseComments: false
                }
            }
        }
        //,
        // bower: {
        //     target: {
        //         rjsConfig: 'public/scripts/config.js',
        //         options: {
        //             baseUrl: 'public/'
        //         }
        //     }
        // }
    });
    grunt.registerTask('build', [ 'requirejs']);
};