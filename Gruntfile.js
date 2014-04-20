module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'src/js/libs/jquery.js',
                    'src/js/*.js'
                ],
                dest: 'production/js/scripts.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'production/js/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },
	    copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: ['*.html'], dest: 'production/'},
					{expand: true, cwd: 'src/img/', src: ['**'], dest: 'production/img'},
					{expand: true, cwd: 'src/css', src: ['**'], dest: 'production/css'}
				]
			}
		},
		clean: {
			dev: ["production/_*.html", "production/css/lib", "production/css"],
			release: ["production/*",]
		}
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Задача по умолчанию
    grunt.registerTask('default', ['clean','concat', 'uglify', 'copy']);
};