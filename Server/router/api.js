const router = require('koa-router')()

const docController = require('./../controller/doc')

const routers = router
    .get('/doc/getTopicList', docController.getTopicList)

module.exports = routers