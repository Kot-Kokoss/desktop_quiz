import './styles/App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react';
import AnswerList from './components/AnswerList';
import QuestionItem from './components/QuestionItem';
import { observer } from 'mobx-react-lite';
import { Context } from './index.js';
import { fetchQuestions } from './http/questionApi.js';
import Task from './components/Task.js';

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
const Quiz = observer(() => {
  const {main} = useContext(Context)

  // useEffect(() => {
  //   fetchQuestions().then(data => main.setQuestions(data))
  // }, [])


  const [num, setNum] = useState(0)

  return (
    <div>
      <Task num={num}/>
      <button className='next_question' 
        onClick={() => 
          {
            setNum(num + 1)
          }
        }>Следующий</button>
        {/* {main.answers.map(question => 
          <div key={question.id}>{question.body}</div>
        )} */}
    </div>
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