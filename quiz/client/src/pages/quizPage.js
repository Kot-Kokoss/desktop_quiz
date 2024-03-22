import { NavLink } from 'react-router-dom'
import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import Task from '../components/Task.js'

const Quiz = observer(() => {
    const {main} = useContext(Context)
    const [num, setNum] = useState(0)
  
    function trueCounter () {
      if (main.getRight === 1) {
        main.setCountRight(main.getCountRight + 1)
        console.log("Верных", main.getCountRight)
        main.setRight(null)
    } 
    
    }
    function nextTaskHandler (i) {
      
      if (i < 10) {
        return (
          <div>
            <Task num={num}/>
            <button className='next_question' 
            onClick={() => 
              {
                setNum(num + 1)
                trueCounter()
              }
            }>Следующий</button>
          </div>
        );
      } else if (i === 10){
        return (
          <div>
            {/* <Task num={num}/> */}
            <NavLink onClick={trueCounter()} to='/end'>Завершить Тестирование</NavLink>
          </div>
        );
        
      }
      
    }
  
    return (
      nextTaskHandler(num)
    );
})

export default Quiz;