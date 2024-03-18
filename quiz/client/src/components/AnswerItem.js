import React from "react";

const AnswerItem = (props) => {
    return (
        <div>
            <label onClick={props.onClick} id={props.answer.id}><input type='radio'/>{props.answer.body}</label>
        </div>
    )
}

export default AnswerItem;