/* global describe it */
var app = require('../app')
var request = require('supertest').agent(app.listen())

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
