module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['js/partials/*.js'],
				dest: 'js/app.js'
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'js/pokespeedtier.js': 'js/app.js'
				}
			}
		},
		uglify: {
			my_target: {
			  files: {
			    'js/pokespeedtier.min.js': ['js/pokespeedtier.js']
			  }
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'stylesheets'
				}
			}
		},
		jade: {
			compile: {
	            options: {
	                client: false,
	                pretty: true
	            },
	            files: [ {
	              cwd: './',
	              src: 'index.jade',
	              dest: "./",
	              expand: true,
	              ext: '.html'
	            } ]
        	}
    	},
		watch: {
			options: { livereload: true },
			css: {
				files: ['js/**/*.js', '**/*.scss','**/*.jade'],
				tasks: ['uglify','concat', 'babel', 'compass','jade']
			}
		},
		express:{
			all:{
				options:{
					port: 9000,
					hostname: 'localhost',
					bases: ['./'],
					// livereload:true
				}
			}
		},
		open: {
      		all: {
        		path: 'http://localhost:<%= express.all.options.port%>',
        		app: 'Google Chrome'
      		}
    	}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.registerTask('server', ['express','open','watch']);
	grunt.registerTask('default', ['server']);
}