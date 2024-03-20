const {Question} = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {
    async create(req, res, next) {
        try {
            const {id, body, image} = req.body
            const question = await Question.create({id, body, image})
            
            return res.json(question)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const questions = await Question.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {id} = req.params
        const question = await Question.findOne({where: {id}})
        return res.json(question)
    }
}

module.exports = new QuestionController()