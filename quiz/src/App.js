import './styles/App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom'
import React, { useState } from 'react';

function Main() {
  return (
    <div>
      <h1>Тестирование по тактике</h1>
      <NavLink to='/quiz'>Начать тестирование</NavLink>
    </div>
  )
}

function Qestion(props) {
  return (
    <div className='question_wrap'>
      <div className='question_number'>{props.value[props.value.length - 1]}</div>
      <div className='question_body'>{props.value}</div>
    </div>
  )
}

function Answer(props) {
  return (
    <label onClick={props.onClick}><input type='radio'/>{props.value}</label>
  )
}

function Body(props) {
 
  function renderQestion(question) {
    return (
      <Qestion
        value={question}
      />
    );
  }

  function renderAnswer(i, answer) {
    console.log
    return (
      <Answer
        value={answer[i]}
      />
    );
  }
  
  return (
    <div>
      <h1>Тестирование</h1>
      <div className='body_wrap'>
        {renderQestion(props.question)}

        <div className='answer'>
          {renderAnswer(0, props.answer)}
          {renderAnswer(1, props.answer)}
          {renderAnswer(2, props.answer)}
          {renderAnswer(3, props.answer)}
        </div>
        {/* <NavLink to='/end'>Закончить</NavLink> */}
      </div>     
    </div>
  );
}

function Quiz() {
  const [questions, answers_cache] = useState([
    'Вопрос 1', 'Вопрос   2', 'Вопрос 3', 'Вопрос4', 'Вопрос5', 'Вопрос6', 'Вопрос7', 'Вопрос8', 'Вопрос9', 'Вопрос10'
  ],
  [
    ['Ответ-1 для 1 вопроса', 'Ответ-2 для 1 вопроса', 'Ответ-3 для 1 вопроса','Ответ-4 для 1 вопроса'],
    ['Ответ-1 для 2 вопроса', 'Ответ-2 для 2 вопроса', 'Ответ-3 для 2 вопроса', 'Ответ-4 для 2 вопроса']
  ])

  function handlerClickNext() {
    console.log('Clicked next!')
  }

  function renderBody(i) {
    return (
      <Body 
        question={questions[i]}
        answer={answers_cache[i]}
      />
    );
  }

  return (
    <div>
      {renderBody(0)}
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