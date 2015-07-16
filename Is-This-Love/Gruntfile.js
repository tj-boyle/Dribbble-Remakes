module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		concat:{
			dist:{
				src: "src/scripts/**/*.js",
				dest: "dist/scripts/production.js",
			}
		},

		uglify: {
		    build: {
		        src: 'dist/scripts/production.js',
		        dest: 'dist/scripts/production.min.js'
		    }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'src/images',
		            src: ['**/*.{png,jpg,gif,svg}'],
		            dest: 'dist/images/'
		        }]
		    }
		},

		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'dist/main.css': 'src/stylesheets/main.scss'
		        }
		    } 
		},

		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: 'src/scripts/**/*.js',
		        // tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
		    css: {
			    files: 'src/stylesheets/**/*.scss',
			    tasks: ['sass'],
			    options: {
			        spawn: false,
			    }
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('watch', ['watch']);
	grunt.registerTask('production', ['concat', 'uglify', 'imagemin']);
}