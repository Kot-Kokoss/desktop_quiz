import { NavLink } from 'react-router-dom'
import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { fetchQuestions, fetchAnswers } from '../http/questionApi.js';
import random from 'random'


const Main = observer(() => {
    const {main} = useContext(Context)
    main.setCountRight(null)
    main.setRight(null)
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
  })

export default Main;