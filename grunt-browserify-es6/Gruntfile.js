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
            build: {
                src: 'index.js',
                dest: 'bundle.js',
                options: {
                    transform: [["babelify", { "presets": ["@babel/preset-env"] }]]
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', [
        'browserify',
        'uglify'
    ]);

};
