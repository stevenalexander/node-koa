var render = require('./lib/render')
var route = require('koa-route')
var koa = require('koa')
var app = module.exports = koa()

app.on('error', function (err) {
  console.log('server error', err)
  this.body = render('error', { error: err })
})

// Order of middleware use() is important

// logger
// uses generator function which records date then yields to next
// function added to chain, when chain finishes it records response
// time and adds to response as header
app.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s - %s', this.method, this.url, this.status, ms)
})

app.use(function *pageNotFound (next) {
  yield next
  if (this.status !== 404) return
  this.status = 404
  this.body = yield render('notfound')
})

app.use(route.get('/', index))

function *index () {
  this.body = yield render('index', { message: 'Hello it\'s ' + new Date() })
}

app.listen(3000)
