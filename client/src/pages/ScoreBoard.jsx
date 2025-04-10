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
    })
    const navigateCat = () =>{
        navigate('/selectCategory/quiz/'+quizId+'/session/'+sessionId)
    }
    return (
        <div>
            <Nav/>
            {session?.participants?.map((participant)=>{
                let points = 0
                participant.points.map((p)=>{points += p.points})
                return <div key={participant._id} className="scoreBox">
                    <img className='avatar' url={participant.userImg} ></img>
                    <p>{participant.username}</p>
                    <p>{points}</p>
                </div>
            })}
            <button onClick={navigateCat}>next category</button>
        </div>
    )
}

export default ScoreBoard
