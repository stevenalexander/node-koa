var render = require('../lib/render')
var route = require('koa-route')

module.exports = function (app) {
  app.use(route.get('/', index))

  function *index () {
    this.body = yield render('index', { message: 'Hello it\'s ' + new Date() })
  }
}
