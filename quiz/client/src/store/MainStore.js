import {makeAutoObservable} from 'mobx-react-lite'

export default class MainStore {
    constructor() {
        this._question = {}
        this._answer = {}
        makeAutoObservable(this)
    }

}
