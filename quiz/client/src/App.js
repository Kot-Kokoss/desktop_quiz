import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Quiz from './pages/quizPage.js';
import Main from './pages/mainPage.js'
import End from './pages/endPage.js'

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