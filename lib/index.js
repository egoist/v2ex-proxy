'use strict'
const Fs = require('fs-promise')
const koa = require('koa')
const cors = require('koa-cors')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const fetch = require('axios')

module.exports = function (options) {
  options = options || {}
  const port = options.port || 4100

  const app = koa()

  /**
   * Utils
   */
  function baseAPI(fp) {
    return `https://www.v2ex.com/api/${fp}.json`
  }

  /**
   * Routes
   */
  const router = new Router()

  router.get('/', function* () {
    const readme = yield Fs.readFile('./README.md', 'utf8')
    this.body = readme
  })

  router.get('/hot', function* () {
    const data = yield fetch.get(baseAPI('topics/hot'))
      .then(res => res.data)
    this.body = data
  })

  router.get('/latest', function* () {
    const data = yield fetch.get(baseAPI('topics/latest'))
      .then(res => res.data)
    this.body = data
  })

  router.get('/topic/:id', function* () {
    const data = yield fetch.get(baseAPI('topics/show'), {
      params: {
        id: this.params.id
      }
    }).then(res => res.data)
    this.body = data[0]
  })

  router.get('/replies/:id', function* () {
    const page = this.query.page || 1

    const data = yield fetch.get(baseAPI('replies/show'), {
      params: {
        topic_id: this.params.topic_id, // eslint-disable-line
        page
      }
    }).then(res => res.data)
    this.body = data
  })

  router.get('/user/:username', function* () {
    const data = yield fetch.get(baseAPI('members/show'), {
      params: {
        username: this.params.username
      }
    }).then(res => res.data)
    this.body = data
  })

  /**
   * Use middlewares
   */
  app
    .use(cors())
    .use(router.routes())
    .use(bodyParser())

  /**
   * gogogo
   */
  app.listen(port, () => {
    console.log(`V2EX proxy is running at http://localhost:${port}`)
  })
}
