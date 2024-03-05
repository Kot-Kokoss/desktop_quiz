import React from "react";

const AnswerItem = ({answer}) => {
    return (
        <div>
            <div onClick={console.log('Ckicked!!!')}>{answer.body}</div>
        </div>
    )
}

export default AnswerItem;