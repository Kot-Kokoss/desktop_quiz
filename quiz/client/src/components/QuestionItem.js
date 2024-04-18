import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

const QuestionItem = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(12);
    const [showPopup, setShowPopup] = useState(false); // Состояние для отображения всплывающего окна

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    setShowPopup(true); // Показываем всплывающее окно        

                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, minutes]);

   
    return (
        <div className='question_wrap'>
            <div className='question_number'>{props.num}/10</div>
            <div className='question_body'>{props.question}</div>
            <div className="timer">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
            {showPopup && (
                <div className="popup">
                    <div className='popup_wrap'>
                        <NavLink to='/end'><button className='end_test'>Завершить Тестирование</button></NavLink>   
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default QuestionItem;
