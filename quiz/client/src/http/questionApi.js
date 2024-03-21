import {$host} from "./index.js"

export async function fetchQuestions(questionIDs) {
    const requests = questionIDs.map(id => $host.get(`http://localhost:5000/api/question/${id}`));
    const responses = await Promise.all(requests);
    const data = responses.map(r => r.data);
    return data;
  }

export async function fetchAnswers(questionIds) {
  const requests = questionIds.map(questionId => $host.get(`http://localhost:5000/api/answer/${questionId}`));
  const responses = await Promise.all(requests);
  const data = responses.map(r => r.data);
  return data.flat();
}