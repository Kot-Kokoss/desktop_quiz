import React from "react";

const AnswerItem = (props) => {
    return (
        <div>
            <label onClick={props.onClick} ><input type='radio'/>{props.answer.body}</label>
        </div>
    )
}

export default AnswerItem;