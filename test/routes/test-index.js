/* global describe beforeEach it */
var routeIndex = require('../../routes/index')
var koa = require('koa')

describe('index', function () {
  var request

  beforeEach(function () {
    // Setting up the app this way means all dependencies from app.js are explicitly defined per route file
    var app = module.exports = koa()
    routeIndex(app)
    request = require('supertest').agent(app.listen())
  })

  describe('200', function () {
    describe('when GET /', function () {
      it('should return the index page', function (done) {
        request
        .get('/')
        .expect(200, done)
      })
    })
  })

  describe('404', function () {
    describe('when GET /does-not-exist', function () {
      it('should return the notfound page', function (done) {
        request
        .get('/does-not-exist')
        .expect(404, done)
      })
    })
  })
})
