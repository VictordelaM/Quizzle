import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'

const ScoreBoard = () => {
    const {scorePlayer1, setScorePlayer1, scorePlayer2, setScorePlayer2, scorePlayer3, setScorePlayer3, scorePlayer4, setScorePlayer4, scorePlayer5, setScorePlayer5, scorePlayer6, setScorePlayer6, scorePlayer7, setScorePlayer7, scorePlayer8, setScorePlayer8, } = useContext(mainContext)
  return (
    <div>
      <p>{scorePlayer1}</p>
      <p>{scorePlayer2}</p>
    </div>
  )
}

export default ScoreBoard
