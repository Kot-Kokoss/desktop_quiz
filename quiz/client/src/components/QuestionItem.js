import React from "react";

const QuestionItem = (props) => {
    return (
        <div className='question_wrap'>
            <div className='question_number'>{props.num}</div>
            <div className='question_body'>{props.question}</div>
        </div>
    )
}

export default QuestionItem;