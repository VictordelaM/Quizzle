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
        <div className="component bg-[var(--primary-colour)]">
            <div className='flex flex-col h-[95vh] items-center gap-[2.5%] p-[5%]'>
                {quiz?.sessions?.map((session, index)=>{
                    return <div onClick={()=>join(session.sessionId)} key={index} className="flex flex-col justify-center gap-[5%] items-center w-[90%] h-fit bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                        {'session '+ (index+1)}
                        <p>participants</p>
                        {session.participants.map((participant, index)=>{
                            return <p>{participant.username}</p>
                        })}
                    </div>
                })}
                <button onClick={create} className='my-[20%] p-[1%] bg-[var(--secondary-colour)] text-[var(--primary-colour)]'>create session</button>
            </div>
        </div>
    )
}

export default SessionContainer
