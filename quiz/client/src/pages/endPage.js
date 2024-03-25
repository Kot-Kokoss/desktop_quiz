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
         <div className='answer_list'>Ваша оценка: {result}</div>
          <NavLink to='/'><button className='next_question'>Вернуться в начальный экран</button></NavLink>
        </div>        
      </div>
    )
  })

export default End;