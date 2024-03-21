import React from "react";
import AnswerItem from "./AnswerItem";

export const AnswerList = (props) => {
    const [ActiveAnswer, setActiveAnswer] = useState()   
    function handlerClickAnswer (i) {
        console.log('Clicked!!!')
        
    }
    return (
        <div className="answer_list">
            {props.answers.map((answer) => {
                return <AnswerItem key={answer.id} onClick={() => 
                    {
                      handlerClickAnswer(),
                      setActiveAnswer(answer.id)
                    }} answer={answer}/>
            }                
            )}
        </div>
    )
}

export default AnswerList;