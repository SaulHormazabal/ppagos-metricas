module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dev: {
                options: {
                    transform: [['babelify', {presets: ['es2015']}]],
                    sourceType: 'module',
                    options: {
                        external: ['jquery', 'materialize-css'],
                    },
                    browserifyOptions: {
                        parserOptions: {
                            sourceType: 'module',
                        },
                    },
                },
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: ['**/*.babel'],
                    ext: '.js',
                    dest: 'dist/scripts',
                }],
            },
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015']}]],
                },
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: ['**/*.babel'],
                    ext: '.js',
                    dest: 'dist/scripts',
                }],
            },
        },

        connect: {
            server: {
                options: {
                    base: {
                        path: 'dist',
                        options: {
                            index: 'index.html',
                        }
                    },
                    keepalive: true,
                    livereload: true,
                    port: 8000,
                },
            },
        },

        swig: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '*.swig',
                    ext: '.html',
                    dest: 'dist',
                }],
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '*.swig',
                    ext: '.html',
                    dest: 'dist',
                }],
            },
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '*.html',
                    dest: 'dist',
                }],
            },
            dev: {
                options: {
                    collapseWhitespace: true,
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '*.html',
                    dest: 'dist',
                }],
            },
        },

        postcss: {
            dev: {
                options: {
                    map: true,
                    processors: [
                        require('postcss-import')(),
                        require('postcss-cssnext')({browsers: ['last 10 versions']}),

                        require('postcss-nesting')(),
                    ],
                    failOnError: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.css'],
                    dest: 'dist/styles',
                }],
            },

            dist: {
                options: {
                    map: false,
                    processors: [
                        require('postcss-import')(),
                        require('postcss-cssnext')({browsers: ['last 10 versions']}),

                        require('postcss-nesting')(),
                        require('cssnano')({
                            discardComments: {removeAll: true},
                            autoprefixer: false,
                        }),
                    ],
                    failOnError: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.css'],
                    dest: 'dist/styles',
                }],
            },

        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['src/scripts/**/*.babel'],
                tasks: ['browserify:dist'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/styles/**/*.css'],
                tasks: ['postcss:dev'],
                options: {
                    spawn: false,
                },
            },
            swig: {
                files: ['src/**/*.swig'],
                tasks: ['swig:dist', 'htmlmin:dist'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-swig-templates');

    grunt.registerTask('default', [
        'browserify:dev',
        'postcss:dev',
        'swig:dev',
        'htmlmin:dev',
    ]);

    grunt.registerTask('dist', [
        'browserify:dev',
        'postcss:dist',
        'swig:dist',
        'htmlmin:dist',
    ]);

};
