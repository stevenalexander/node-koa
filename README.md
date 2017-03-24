# Node Koa

[![BuildStatus](https://travis-ci.org/stevenalexander/node-koa.svg?branch=master)](https://travis-ci.org/stevenalexander/node-koa?branch=master)

Sample [Koa](http://koajs.com/) application to test out handling asyc operations.


### Notes

* Uses [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) to build a chain of middleware functions that chain together to handle requests
* Adds `Server-Timing` header value which [integrates with chrome dev tools](https://ma.ttias.be/server-timings-chrome-devtools/) to display internal timing values for performance debugging