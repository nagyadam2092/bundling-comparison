module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
            },
            build: {
                src: 'bundle.js',
                dest: 'bundle.min.js'
            }
        },
        browserify: {
            dist: {
                files: {
                    'bundle.js': [ 'index.ts' ]
                },
                options: {
                    plugin: [
                        ['tsify', {
                            target: 'es5',
                            removeComments: true
                        }]
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', [
        'browserify',
        'uglify'
    ]);

};
