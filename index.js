var btype = require('btype');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var transform = 'module.exports = ' + btype(source, this.resourcePath, 'js');
  this.callback(null, transform, null);
};
