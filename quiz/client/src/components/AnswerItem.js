import React from "react";

const AnswerItem = (props) => {
    function renderItem(props) {
        if (props.img) {
            let img_id = `http://localhost:5000/${props.answer.body}.bmp`
            return (
                <div className="answer_item">
                    <label onClick={props.onClick}>
                        <input type='radio' name="answer"/>
                        <img src={img_id}/>
                    </label>
                </div>
            )
        } else {
            return (
                <div className="answer_item">
                    <label onClick={props.onClick}><input type='radio' name="answer"/>{props.answer.body}</label>
                </div>
            )
        }
    }
    return (
        renderItem(props) 
    )
       
}

export default AnswerItem;