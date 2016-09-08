var path = require('path')
var views = require('co-views')

module.exports = views(path.join(__dirname, '/../views'), {
  map: { html: 'swig' }
})
