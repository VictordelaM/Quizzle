import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchQuizData } from '../functions/fetches/getQuizData'
import { createSession, joinSession } from '../functions/fetches/sessionFetches'

const SessionContainer = () => {
    const [quiz, setQuiz] = useState(0)
    const {quizId} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        const getQuizData = async () =>{
            const quizData = await fetchQuizData(quizId)
            setQuiz(quizData)
        }
        getQuizData()
    },[])    
    const join = async(sessionId) =>{
        joinSession(quizId, sessionId)
        navigate('/userAnswer/' + quizId + '/session/' + sessionId)
    }
    const create = async() =>{
        const session = createSession(quizId)
    }

    return (
        <div>
            {quiz?.sessions?.map((session, index)=>{
                return <div key={index}>
                    {session._id}
                    <button onClick={()=>join(session.sessionId)}>join Session</button>
                </div>
            })}
            <button onClick={create}>create session</button>
        </div>
    )
}

export default SessionContainer
