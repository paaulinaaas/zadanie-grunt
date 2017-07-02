module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'style/style.css' : 'main.sass' /*po lewej jest katalog gdzie wszystko sie skompiluje, a po prawej nazwa pliku*/
				}
			}
		},

		  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},

		watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass', 'imagemin', 'watch']); /*taski ktore maja sie odpalic: 1. zamiana css na sassa i 2 watch*/
}