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
        location.reload()
    }

    return (
        <div className="component">
            <div className='content'>
                {quiz?.sessions?.map((session, index)=>{
                    return <div key={index} className='container'>
                        {'session '+ (index+1)}
                        <p>participants</p>
                        {session.participants.map((participant, index)=>{
                            return <p>{participant.username}</p>
                        })}
                        <button onClick={()=>join(session.sessionId)}>join Session</button>
                    </div>
                })}
                <button onClick={create}>create session</button>
            </div>
        </div>
    )
}

export default SessionContainer
