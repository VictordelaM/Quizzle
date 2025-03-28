import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import ScoreBoard from '../../components/scoreboard/ScoreBoard'
import Question from '../../components/question/Question'
import Guesses from '../../components/guesses/guesses'
import Solution from '../../components/solution/Solution'

const Index = () => {
  const {scorePlayer1, setScorePlayer1} = useContext(mainContext)
  const add = () =>{
  }
  return (
    <div>
        <Solution/>
        <Question/>
        <ScoreBoard/>
        <Guesses/>

    </div>
  )
}

export default Index
