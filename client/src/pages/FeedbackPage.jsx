import React from 'react'
import Nav from '../components/Nav'

const FeedbackPage = () => {
    const sendFeedback = async (e) => {
        e.preventDefault()
        const feedback = e.target.feedback.value
        const anonym = e.target.anonym.checked
        const response = await fetch(import.meta.env.VITE_BACKEND_URL +'/feedback/addFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback, anonym }),
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <div>
            <Nav/>
            <div>
                <h1>Feedback</h1>
                <p>Vielen Dank dass du dir die Zeit nimmst mir zu helfen diese App zu verbessern!!! Das hier ist ein Solo Projekt und andere Meinungen helfen sehr bei der Optimierung!</p>
                <p>Bereits bekannte Issues sind:</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>Wenn du noch andere Anregungen hast teile diese gerne anonym oder mit usernamen</p>
                <form onSubmit={sendFeedback}>
                    <label htmlFor="feedback">Gib hier dein feedback ein</label>
                    <textarea name="feedback" id="feedback"></textarea>
                    <label htmlFor="anonym">Feedback anonym senden</label>
                    <input type="checkbox" name="anonym" id="anonym"/>
                    <button>Senden</button>
                </form>
            </div>
        </div>
    )
}

export default FeedbackPage
