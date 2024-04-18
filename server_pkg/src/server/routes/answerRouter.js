const Router = require('express')
const router = new Router()
const answerController = require('../contollers/answerController')

router.post('/', answerController.create)
router.get('/', answerController.getAll)
router.get('/:questionId', answerController.getById)

module.exports = router