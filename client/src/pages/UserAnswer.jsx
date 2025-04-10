import React, { useEffect, useState } from 'react'
import AnswerCard from '../components/AnswerCard'
import { useParams } from "react-router-dom";
import { getActiveQuestion } from '../functions/getActivQuestion';
import Nav from '../components/Nav';


const UserAnswer = () => {
  const { quizId, sessionId } = useParams();
  const [ activeQuestion, setActiveQuestion ] = useState(null)

  useEffect(()=>{
    const actQue = async() =>{
      const aq = await getActiveQuestion(quizId, sessionId)
      setActiveQuestion(aq)
    }
    actQue()
  }, [])

  if (!activeQuestion) return <div className='loading'>Lädt...</div>;
  return (
    <div className='userBackground'>
        <Nav />
        <AnswerCard activeQuestion={activeQuestion} />
    </div>
  )
}

export default UserAnswer
