import './App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom'

function Main() {
  return (
    <div>
      <h1>Тестирование по тактике</h1>
      <NavLink to='/quiz'>Начать тестирование</NavLink>
    </div>
  )
}

function Quiz() {
  return (
    <div>
      <h1>Тестирование</h1>
      <NavLink to='/end'>Закончить</NavLink>
    </div>
  )
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