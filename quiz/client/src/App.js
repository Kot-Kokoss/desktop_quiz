import './styles/App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index.js';
import { fetchQuestions, fetchAnswers } from './http/questionApi.js';
import Task from './components/Task.js';
import random from 'random'

function Main() {
  const {main} = useContext(Context)

  const questionId = []

  for (let i = 0; i < 10; i++) {
    let biletId = random.int(1, 14)
    if (String(biletId).length < 2) {
      biletId = '0' + biletId
    }
    questionId.push(String(i + 1) + biletId)
  }
  
  useEffect(() => {
    fetchQuestions(questionId).then(data => main.setQuestions(data))
    fetchAnswers(questionId).then(data => main.setAnswers(data))
  }, [])
  return (
    <div>
      <h1>Тестирование по тактике</h1>
      <NavLink to='/quiz'>Начать тестирование</NavLink>
    </div>
  )
}

const Quiz = observer(() => {
  const [num, setNum] = useState(0)

  function nextTaskHandler (i) {
    if (i < 9) {
      return (
        <div>
          <Task num={num}/>
          <button className='next_question' 
          onClick={() => 
            {
              setNum(num + 1)
            }
          }>Следующий</button>
        </div>
      );
    } else {
      return (
        <div>
          <Task num={num}/>
          <NavLink to='/end'>Завершить Тестирование</NavLink>
        </div>
      );
      
    }
  }

  return (
    
    nextTaskHandler(num)
  );
})

function End() {
  return (
    <div>
      <h1>Результат тестирования</h1>
      <NavLink to='/'>Вернуться в начальный экран</NavLink>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/quiz' element={<Quiz />}></Route>
            <Route path='/end' element={<End />}></Route>
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;