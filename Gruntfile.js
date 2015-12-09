var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-clean');

require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  "babel": {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        "dist/index.js": "index.js"
      }
    }
  }
});

grunt.registerTask("default", ["babel"]);
