const Router = require('express')
const router = new Router()
const answerController = require('../contollers/answerController')

router.post('/', answerController.create)
router.get('/', answerController.getAll)

module.exports = router