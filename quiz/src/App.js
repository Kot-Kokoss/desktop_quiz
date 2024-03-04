import './App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom'
import React from 'react';

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

class Body extends React.Component {
 
  renderQestion(i) {
    return (
      <Qestion
        value={this.props.question}
      />
    );
  }

  renderAnswer(i, answer) {
    return (
      <Answer
        value={this.props.answer[i]}
        onClick={() => console.log('Click on answer')}
      />
    );
  }

  render() {
    const { question, answer } = this.props;
    return (
      <div>
        <h1>Тестирование</h1>
        <div className='body_wrap'>
          {this.renderQestion(question)}

          <div className='answer'>
            {this.renderAnswer(0, answer)}
            {this.renderAnswer(1, answer)}
            {this.renderAnswer(2, answer)}
            {this.renderAnswer(3, answer)}
          </div>
          {/* <NavLink to='/end'>Закончить</NavLink> */}
        </div>     
      </div>
    );

  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ['Вопрос 1', 'Вопрос   2', 'Вопрос 3', 'Вопрос4', 'Вопрос5', 'Вопрос6', 'Вопрос7', 'Вопрос8', 'Вопрос9', 'Вопрос10'],
      answers_cache: [['Ответ-1 для 1 вопроса', 'Ответ-2 для 1 вопроса', 'Ответ-3 для 1 вопроса', 'Ответ-4 для 1 вопроса'], ['Ответ-1 для 2 вопроса', 'Ответ-2 для 2 вопроса', 'Ответ-3 для 2 вопроса', 'Ответ-4 для 2 вопроса']]
    };
  }

  handlerClickNext() {
    console.log('Clicked next!')
  }

  renderBody(i) {
    return (
      <Body 
        question={this.state.questions[i]}
        answer={this.state.answers_cache[i]}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderBody(0)}
        <button className='next_question' 
          onClick={() => 
            {
              this.handlerClickNext()
            }
          }>Следующий</button>
      </div>
      
    );

  }
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