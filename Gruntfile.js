module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
                transform: [['babelify', {presets: ['es2015']}]],
                sourceType: 'module',
                options: {
                    external: ['jquery'],
                },
                browserifyOptions: {
                    debug: true,
                    parserOptions: {
                        sourceType: 'module',
                    },
                },
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: ['*.js'],
                    ext: '.js',
                    dest: 'dist/scripts',
                }],
            },
        },

        copy: {
            json: {
                expand: true,
                cwd: 'src/data',
                src: '*.json',
                ext: '.json',
                dest: 'dist/data',
            },
            images: {
                expand: true,
                cwd: 'src/images',
                src: '**/*',
                dest: 'dist/images',
            },
            downloads: {
                expand: true,
                cwd: 'src/downloads',
                src: '**/*',
                dest: 'dist/downloads',
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

        exorcise: {
            build: {
                options: {},
                files: [{
                    expand: true,
                    cwd: 'dist/scripts',
                    src: ['*.js'],
                    ext: '.map',
                    dest: 'dist/scripts',
                }],
            }
        },

        swig: {
            build: {
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
            options: {
                collapseWhitespace: true,
                removeComments: true,
            },
            build: {
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
                    map: true,
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

        uglify: {
            options: {
                sourceMap: true,
                sourceMapIn: (file) => {
                    return file.replace(/\.js$/, '.map');
                },
                sourceMapName: (file) => {
                    return file.replace(/\.js$/, '.map');
                },
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'dist/scripts',
                    src: '*.js',
                    ext: '.js',
                    dest: 'dist/scripts',
                }],
            },
        },

        watch: {
            options: {
                livereload: true,
            },
            downloads: {
                files: ['src/downloads/**/*'],
                tasks: ['copy:downloads'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['src/images/**/*'],
                tasks: ['copy:images'],
                options: {
                    spawn: false,
                },
            },
            json: {
                files: ['src/data/*.json'],
                tasks: ['copy:json'],
                options: {
                    spawn: false,
                },
            },
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['browserify', 'exorcise', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/styles/**/*.css'],
                tasks: ['postcss:dist'],
                options: {
                    spawn: false,
                },
            },
            swig: {
                files: ['src/**/*.swig'],
                tasks: ['swig', 'htmlmin'],
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exorcise');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-swig-templates');

    grunt.registerTask('default', [
        'browserify',
        'exorcise',
        'uglify',
        'postcss:dist',
        'swig',
        'htmlmin',
        'copy',
    ]);

    grunt.registerTask('dev', [
        'browserify',
        'uglify',
        'postcss:dev',
        'swig',
        'copy',
    ]);

};
