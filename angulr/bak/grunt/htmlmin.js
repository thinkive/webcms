module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'src/tpl/',
          src: ['*.html', '**/*.html'],
          dest: 'dist/tpl/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}