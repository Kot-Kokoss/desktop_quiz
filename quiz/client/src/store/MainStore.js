import {makeAutoObservable} from 'mobx'

export default class MainStore {
    constructor() {
        this._questions = [
            {id: 101, body: 'Вопрос 1', image: 0},
            {id: 201, body: 'Вопрос 2', image: 0},
            {id: 301, body: 'Вопрос 3', image: 0},
            {id: 401, body: 'Вопрос 4', image: 0}
        ]
        this._answers = [
            {id: 1, body: 'Ответ 1.1', right: 1, questionId: 101},
            {id: 2, body: 'Ответ 1.2', right: 0, questionId: 101},
            {id: 3, body: 'Ответ 1.3', right: 0, questionId: 101},
            {id: 4, body: 'Ответ 2.1', right: 1, questionId: 201},
            {id: 5, body: 'Ответ 2.2', right: 0, questionId: 201},
            {id: 6, body: 'Ответ 3.1', right: 1, questionId: 301},
            {id: 7, body: 'Ответ 3.2', right: 0, questionId: 301},
            {id: 8, body: 'Ответ 4.1', right: 1, questionId: 401},
            {id: 9, body: 'Ответ 4.2', right: 0, questionId: 401},
        ]
        makeAutoObservable(this)
    }

    setQuestions(questions) {
        this._questions = questions
    }

    setAnswers(answers) {
        this._answers = answers
    }

    get questions() {
        return this._questions
    }

    get answers() {
        return this._answers
    }

}
