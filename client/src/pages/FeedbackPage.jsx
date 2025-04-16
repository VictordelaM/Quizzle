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
        <div className="min-h-screen bg-[var(--primary-colour)] text-[var(--secondary-colour)]">
        <Nav />
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
            <h1 className="text-3xl font-bold text-center">Feedback</h1>
            <p className="text-lg text-justify">
                Vielen Dank, dass du dir die Zeit nimmst, mir zu helfen, diese App zu verbessern! Das hier ist ein Solo-Projekt und andere Meinungen helfen sehr bei der Optimierung!
            </p>
    
            <div className="bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-xl shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Bereits bekannte Issues</h2>
                <ul className="list-disc list-inside space-y-1">
                <li>[Platzhalter für Issue 1]</li>
                <li>[Platzhalter für Issue 2]</li>
                <li>[Platzhalter für Issue 3]</li>
                </ul>
            </div>
    
            <div className="bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Eigene Anregungen</h2>
                <p className="mb-4">Teile dein Feedback gerne anonym oder mit Usernamen:</p>
                <form onSubmit={sendFeedback} className="space-y-4">
                <div>
                    <label htmlFor="feedback" className="block mb-1 font-medium">Gib hier dein Feedback ein</label>
                    <textarea
                    name="feedback"
                    id="feedback"
                    className="w-full h-32 p-2 rounded-lg border border-[var(--primary-colour)] bg-transparent text-[var(--primary-colour)]"
                    ></textarea>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="anonym" id="anonym" className=" accent-[var(--primary-colour)]" />
                    <label htmlFor="anonym" className="font-medium">Feedback anonym senden</label>
                </div>
                <button
                    type="submit"
                    className="bg-[var(--primary-colour)] text-[var(--secondary-colour)] px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Senden
                </button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default FeedbackPage
