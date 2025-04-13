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
            console.log(sessionData)
            setSession(sessionData)
        }
        getData()
    },[])
    const navigateCat = () =>{
        navigate('/selectCategory/quiz/'+quizId+'/session/'+sessionId)
    }
    return (
        <div className='flex flex-col'>
            <Nav/>
            <div className='flex justify-evenly h-screen '>
                <table className="border-collapse border border-gray-400 ...">
                        <thead>
                            <tr>
                            <th className="border border-gray-300 ...">Teilnehmer</th>
                            <th className="border border-gray-300 ...">Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                    {session?.participants?.map((participant)=>{
                        let points = 0
                        
                        participant.points.map((p)=>{points += p.points})
                        return <tr key={participant._id}>
                            <td className="border border-gray-300 ..."><img className='avatar' url={participant.userImg} ></img>{participant.username}</td>
                            <td className="border border-gray-300 ...">Detroit</td>
                            </tr>
                        
                        // <div key={participant._id} className="flex flex-col test w-30/100">
                        //     <img className='avatar' url={participant.userImg} ></img>
                        //     <p>{participant.username}</p>
                        //     <p>{points}</p>
                        // </div>
                    })}
                    </tbody>
                </table>
                <button onClick={navigateCat}>next category</button>
            </div>
            
            
        </div>
    )
}

export default ScoreBoard
