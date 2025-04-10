import React, { useEffect, useState } from 'react'
import { getSessionData } from '../functions/fetches/sessionFetches'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const ScoreBoard = () => {
    const [session, setSession] = useState(null)
    const {quizId, sessionId} = useParams()
    useEffect(() =>{
        
        const getData = async() =>{
            const sessionData = await getSessionData(quizId, sessionId)
            setSession(sessionData)
        }
        getData()
    })
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
        </div>
    )
}

export default ScoreBoard
