import React, { useEffect, useState } from 'react'
import { getSessionData } from '../functions/fetches/sessionFetches'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const ScoreBoard = () => {
    const [session, setSession] = useState(null)
    const {quizId, sessionId} = useParams()
    const navigate = useNavigate()
    useEffect(() =>{
        
        const getData = async() =>{
            
            const sessionData = await getSessionData(quizId, sessionId)
            setSession(sessionData)
        }
        getData()
    },[])
    const navigateCat = () =>{
        navigate('/selectCategory/quiz/'+quizId+'/session/'+sessionId)
    }
    return (
        <div className='flex flex-col min-h-screen bg-gray-50 '>
            <Nav/>
            <div className='flex flex-col h-[95vh] bg-[var(--primary-colour)]'> 
                <div className='flex flex-wrap justify-center items-center  h-[95vh] gap-x-6'>
                        {session?.participants?.map((participant)=>{
                            let points = 0
                            
                            participant.points.map((p)=>{points += p.points})
                            return <div key={participant._id} className="flex flex-col items-center w-full sm:w-[45%] md:w-[20%] lg:w-[20%] bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={participant.userImg} className='w-12 h-12 object-cover rounded-full mb-3' alt='noImg'/>
                                <p>{participant.username}</p>
                                <p>{points}</p>
                            </div>
                        })}
                </div>
                <button onClick={navigateCat} className='text-[var(--secondary-colour)] mb-[5%]'>next category</button>
            </div>
            
            
            
        </div>
    )
}

export default ScoreBoard
