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
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['jade','less','cssmin','uglify', 'jshint']);

};
