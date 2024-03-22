import React, { useContext, useState } from "react";
import { Context } from "..";
import QuestionItem from "./QuestionItem";
import AnswerList from "./AnswerList";

const Task = (props) => {
    const {main} = useContext(Context)
    const questions = main.questions
    const answers = main.answers

    function renderNewTask(i) {
        
        let task_id = questions[i].id
        let question_answers = []
        for (let j = 0; j < answers.length; j++) {
            if (answers[j].questionId === task_id) {
                question_answers.push(answers[j])
            }            
        }

        return (
            <div>
                <h1>Тестирование</h1>
                {/* <div>TIMER</div> */}
                <div className='body_wrap'>
                    <QuestionItem num={i + 1} question={questions[i].body}/>
                    <AnswerList num={i} answers={question_answers}/>
                </div>     
            </div>
        );
    }

    return (
        renderNewTask(props.num)
      );
}

export default Task;