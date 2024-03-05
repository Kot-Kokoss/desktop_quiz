import React from "react";

const AnswerItem = (props) => {
    return (
        <div>
            <label onClick={props.onClick}><input type='radio'/>{props.answer}</label>
        </div>
    )
}

export default AnswerItem;