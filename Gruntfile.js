module.exports = function(grunt){

	grunt.initConfig({

		jshint: {
			all: ['Gruntfile.js', 'js.js']
		},

		jade: {
			compile: {
				files: {
					"index.html": ["index.jade"]
				}
			}
		},

		less: {
			development: {
				files: {
					"css.css": "css.less"
				}
			}
		},

		cssmin: {
			target: {
				files: {
					'styles.css': ['css.css']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'min.js': ['js.js']
				}
			}
		},

		watch: {
			html: {
				files: ['index.jade','jade/*.jade'],
				tasks: ['jade'],
				options: { spawn:false }
			},
			css: {
				files: ['css.less','css/*.less'],
				tasks: ['less','cssmin'],
				options: { spawn:false }
			},
			js: {
				files: ['js.js'],
				tasks: ['uglify','jshint'],
				options: { spawn:false }
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// regroupement de tâches grunt
	grunt.registerTask('default', ['jade','less','cssmin','uglify', 'jshint']);

};
