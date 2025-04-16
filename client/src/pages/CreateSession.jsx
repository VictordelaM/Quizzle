import React from 'react'
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';

const CreateSession = () => {
    const {quizId} = useParams()
    const create = async (event) => {   
        event.preventDefault()
        console.log(quizId)
        const sessionData = {
            sessionName: event.target.sessionName.value,
            description: event.target.description.value,
        }
        console.log('data:', sessionData)
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+'/quiz/createSession/quiz/'+quizId, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sessionData),
            credentials: "include"
        })
        const data = await response.json()
        console.log('response',data)
    }
    return (
        <div>
            <Nav />
            
            <div className='flex flex-col h-[95vh] items-center justify-center gap-[2.5%] bg-[var(--primary-colour)] p-[5%]'>
                <div className='flex flex-col h-[95vh] items-center gap-[2.5%] bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-2xl p-[5%] h-fit'>
                    <p>create Session</p>
                    <form onSubmit={create} className='flex flex-col items-center  gap-[1vh]'>
                        <div>
                            <label htmlFor="sessionName" className=' w-[50%]'>Session Name:</label>
                            <input type="text" id="sessionName" name="sessionName" required className='border border-[var(--primary-colour)] w-[50%] ' />
                        </div>
                        <div>
                            <label htmlFor="description" className=' w-[50%]'>Beschreibung:</label>
                            <input type="text" id="description" name="description" required  className='border border-[var(--primary-colour)] w-[50%]'/>
                        </div>
                        {/* <div>
                            <label htmlFor="password">Passwort:</label>
                            <input type="checkbox" name="passwordRequired" />
                            <input type="password" name="password" />
                        </div>
                        <div>
                            <label htmlFor="limit">Maximale Teilnehmerzahl</label>
                            <input type="number" name="limit" />
                        </div>
                        <div>
                            <label htmlFor="onlyInvited">Nur eingeladene Teilnehmer:</label>
                            <input type="checkbox" name="onlyInvited" />
                        </div>
                        <div>
                            <label htmlFor="joker">Joker</label>
                            <input type="text" name="joker" />
                        </div>
                        <div>
                            <label htmlFor="sessionImage">Lade ein Bild für die Session hoch</label>
                            <input type="file" name="sessionImage"/>
                        </div> */}
                        <button className='text-[var(--primary-colour)] border border-[var(--primary-colour)] '>Session erstellen</button>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default CreateSession
