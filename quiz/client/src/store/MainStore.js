import {makeAutoObservable} from 'mobx'

export default class MainStore {
    constructor() {
        this._questions = []
        this._answers = []
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
