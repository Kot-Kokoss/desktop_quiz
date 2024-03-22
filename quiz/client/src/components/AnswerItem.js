import React from "react";

const AnswerItem = (props) => {
    return (
        <div className="answer_item">
            <label onClick={props.onClick}><input type='radio' name="answer"/>{props.answer.body}</label>
        </div>
    )
}

export default AnswerItem;