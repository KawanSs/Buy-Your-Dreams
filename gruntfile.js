const { option } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'build/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:production']
            }
            // ,
            // html:{
            //     files:['src/index.html'],
            //     tasks: ['replace:dev']
            // }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match:'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match:'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        },
                        {
                            match: 'ENDERECO_DO_ICON',
                            replacement: '../assets/images/icons8-mclaren.svg'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['./index.html'],
                        dest: 'build/'
                    }
                ]
            }
            // ,
            // dist:{
            //     options:{
            //         patterns:[
            //             {
            //                 match:'ENDERECO_DO_CSS',
            //                 replacement: './styles/main.min.css'
            //             },
            //             {
            //                 match:'ENDERECO_DO_JS',
            //                 replacement: './scripts/main.min.js'
            //             }
            //         ]
            //     },
            //     files:[
            //         {
            //             expand: true,
            //             flatten: true,
            //             src: ['prebuild/index.html'],
            //             dest: 'build/'
            //         }
            //     ]
            // }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'build/index.html': './index.html'
                }
            }
        },
        // clean: ['prebuild'],
        uglify: {
            target: {
                files:{
                    'build/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist','replace:dev', 'uglify']);
}