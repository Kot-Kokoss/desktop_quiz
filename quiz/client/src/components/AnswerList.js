import React, { useContext, useState } from "react";
import AnswerItem from "./AnswerItem";
import { Context } from "..";

export const AnswerList = (props) => {
    const {main} = useContext(Context)
    function handlerClickAnswer (right) {
        if (right) {
            console.log('Верно')
            main.setRight(1)
        } else {
            main.setRight(0)
        }
    }
    return (
        <div className="answer_list">
            {props.answers.map((answer) => {
                return <AnswerItem img={props.img} key={answer.id} onClick={() => 
                    {
                      handlerClickAnswer(answer.right)
                    }} answer={answer}/>
            }                
            )}
        </div>
    )
}

export default AnswerList;