import {makeAutoObservable} from 'mobx'

export default class MainStore {
    constructor() {
        this._questions = []
        this._answers = []
        this.right = null
        this.countRight = null
        makeAutoObservable(this)
    }

    setQuestions(questions) {
        this._questions = questions
    }

    setAnswers(answers) {
        this._answers = answers
    }

    setRight(right) {
        this.right = right
    }

    setCountRight(countRight) {
        this.countRight = countRight
    }

    get questions() {
        return this._questions
    }

    get answers() {
        return this._answers
    }

    get getRight() {
        return this.right
    }

    get getCountRight() {
        return this.countRight
    }
}
