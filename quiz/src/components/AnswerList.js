import React from "react";
import AnswerItem from "./AnswerItem";

const AnswerList = ({answers}) => {    
    function handlerClickAnswer (i) {
        console.log('Clicked onn a')
    }
    return (
        <div className="answer_list">
            {answers.map((answer) => {
                return <AnswerItem onClick={() => 
                    {
                      handlerClickAnswer()
                    }} answer={answer}/>
            }                
            )}
        </div>
    )
}

export default AnswerList;