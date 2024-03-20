import {$host} from "./index.js"
import axios from "axios"

export const fetchQuestions = async () => {
    const {data} = await $host.get('http://localhost:5000/api/question/')
    return data
}