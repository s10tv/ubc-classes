var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-clean');

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  clean: ["dist"],
  babel: {
    options: {
      sourceMap: true
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['**/*.js'],
        dest: 'dist/src',
        ext: '.js'
      }, {
        expand: true,
        cwd: 'tests',
        src: ['**/*.js'],
        dest: 'dist/tests',
        ext: '.js'
      }]
    }
  }
});

grunt.registerTask('default', ['babel']);
