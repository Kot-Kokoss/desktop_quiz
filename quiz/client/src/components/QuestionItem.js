import React from "react";

const QuestionItem = (props) => {
    return (
        <div className='question_wrap'>
            <div className='question_number'>{props.num}/10</div>
            <div className='question_body'>{props.question}</div>
            <div className="timer">10:10</div>
        </div>
    )
}

export default QuestionItem;