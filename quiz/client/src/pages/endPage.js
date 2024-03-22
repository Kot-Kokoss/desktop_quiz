import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';

const End = observer(() => {
    const {main} = useContext(Context)
    let result
    if (main.getCountRight > 8) {
      result = 'Отлично 5'
    } else if (main.getCountRight > 6) {
      result = 'Хорошо 4'
    } else if (main.getCountRight > 4) {
      result = 'Удовлетворительно 3'
    } else {
      result = 'Неудовлетворительно 2'
    }
  
    return (
      <div >
        <h1>Результат тестирования</h1>
        <div className='body_wrap'>
         <div className='question_wrap'>Ваша оценка: {result}</div>
          <button className='next_question'><NavLink to='/'>Вернуться в начальный экран</NavLink></button>
        </div>        
      </div>
    )
  })

export default End;