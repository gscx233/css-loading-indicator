module.exports = function (grunt) {
  // ????
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%=pkg.file %>.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }
    }
  });
  // ????"uglify"?????
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // ????
  grunt.registerTask('default', ['uglify']);
}