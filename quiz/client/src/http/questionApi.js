import {$host} from "./index.js"

export const fetchQuestions = async () => {
    const {data} = await $host.get('api/question')
    return data
}