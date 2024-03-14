const Router = require('express')
const router = new Router()
const questionRouter = require('./questionRouter')
const answerRouter = require('./answerRouter')

router.use('/question', questionRouter)
router.use('/answer', answerRouter)

module.exports = router