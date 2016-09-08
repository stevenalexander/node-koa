var koa = require('koa')
var app = koa()

// error

app.on('error', function (err) {
  console.log('server error', err)
})

// Order of middleware use() is important

// x-response-time
// uses generator function which records date then yields to next
// function added to chain, when chain finishes it records response
// time and adds to response as header
app.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  this.set('X-Response-Time', ms + 'ms')
})

// logger
app.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// response

app.use(function *() {
  this.body = 'Hello World'
})

app.listen(3000)
