const {Answer} = require('../models/models')
const path = require('path');
const ApiError = require('../error/ApiError');

class AnswerController {
    async create(req, res, next) {
        try {
            const {id, body, right, questionId} = req.body
            const answer = await Answer.create({id, body, right, questionId})
            
            return res.json(answer)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const answers = await Answer.findAll()
        return res.json(answers)
    }

    async getById(req,res) {
        const {questionId} = req.params
        const answers = await Answer.findAll({where: {questionId}})
        return res.json(answers)
    }
}

module.exports = new AnswerController()