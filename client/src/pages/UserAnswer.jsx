import React, { useEffect, useState } from 'react'
import AnswerCard from '../components/AnswerCard'
import { useParams } from "react-router-dom";
import { getActiveQuestion } from '../functions/getActivQuestion';
import Nav from '../components/Nav';
import { getIndex } from '../functions/getIndex';


const UserAnswer = () => {
  const { quizId, sessionId } = useParams();
  const [ activeQuestion, setActiveQuestion ] = useState(null)
  const [ index, setIndex ] = useState(null)

  useEffect(()=>{
    const actQue = async() =>{
      const aq = await getActiveQuestion(quizId, sessionId)
      setActiveQuestion(aq)
      const indexData = await getIndex(quizId, sessionId)
      setIndex(indexData)
    }
    actQue()
  }, [])
  if (!activeQuestion) return <div className='loading'>Lädt...</div>;
  return (
    <div className='userBackground page'>
        <Nav />
        <AnswerCard activeQuestion={activeQuestion} index={index}/>
    </div>
  )
}

export default UserAnswer
