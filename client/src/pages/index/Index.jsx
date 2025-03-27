import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import ScoreBoard from '../../components/scoreboard/ScoreBoard'
import Question from '../../components/question/Question'

const Index = () => {
  const {scorePlayer1, setScorePlayer1} = useContext(mainContext)
  const add = () =>{
  }
  return (
    <div>
        <Question/>
        <ScoreBoard/>

    </div>
  )
}

export default Index
