import './styles/App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom'
import React, { useState } from 'react';
import AnswerList from './components/AnswerList';
import QuestionItem from './components/QuestionItem';
import random from 'random'

function Main() {
  return (
    <div>
      <h1>Тестирование по тактике</h1>
      <NavLink to='/quiz'>Начать тестирование</NavLink>
    </div>
  )
}

function Body(props) {
  return (
    <div>
      <h1>Тестирование</h1>
      <div className='body_wrap'>
        <QuestionItem num={props.num} question={props.question}/>
        <AnswerList answers={props.answers}/>
      </div>     
    </div>
  );
}

function Quiz() {
  const [num, setNum] = useState(1)
  const [questions, setQuestions] = useState([
    'Вопрос 1'
  ])

  const [answers, setAnswers] = useState([
    ['Ответ-1 для 1 вопроса', 'Ответ-2 для 1 вопроса', 'Ответ-3 для 1 вопроса','Ответ-4 для 1 вопроса']
    
  ])

  function handlerClickNext() {
    //проверка на то что выбран какой-то ответ
    if(num < 10) {
      setNum(num + 1)
      setQuestions(['Вопрос ' + (num + 1)])
      setAnswers('Ответ-1 для 2 вопроса', 'Ответ-2 для 2 вопроса', 'Ответ-3 для 2 вопроса','Ответ-4 для 2 вопроса')
    } else {
      return (
        <div>
          <NavLink to='/end'>Закончить</NavLink>
        </div>
      )
      
    }
    console.log('Clicked next!')
    
  }

  return (
    <div>
      <Body num={num} question={questions[0]} answers={answers[0]}/>
      <button className='next_question' 
        onClick={() => 
          {
            handlerClickNext()
          }
        }>Следующий</button>
    </div>
  );
}

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