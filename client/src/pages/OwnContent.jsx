import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

const OwnContent = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [sessions, setSessions] = useState([]);
    const navigate = useNavigate();
    const navSessionMod = (quizId, sessionId) => {
        navigate(`/selectCategory/quiz/${quizId}/session/${sessionId}`);
    }
    const navSession = (quizId, sessionId) => {
        navigate(`/userAnswer/${quizId}/session/${sessionId}`);
    }
    const navQuiz = (quizId) => {
        navigate(`/quiz/${quizId}`);
    }
    useEffect(() => {   
        const fetchOwnQuizzes = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/getOwnQuizzes', {
                    method: 'GET',
                    credentials: "include",
                });
                const data = await response.json();
                setQuizzes(data);
            } catch (error) {
                console.error('Fetch-Fehler:', error);
            }
        }
        fetchOwnQuizzes();
        const fetchParticipatedSessions = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/getParticipatedSessions', {
                    method: 'GET',
                    credentials: "include",
                });
                const data = await response.json();
                setSessions(data);
            } catch (error) {
                console.error('Fetch-Fehler:', error);
            }
        }
        fetchParticipatedSessions()
    }, [])


    if (!quizzes || !sessions) {
        return <div>Loading...</div>
    }


    return (
    <div className="min-h-screen bg-[var(--primary-colour)] text-[var(--secondary-colour)]">
    <Nav />
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        
        {/* My Quizzes */}
        <section className="bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">My Quizzes</h2>
        {quizzes.length > 0 ? (
            <div className="space-y-2">
            {quizzes.map((quiz) => (
                <div key={quiz._id} className="border-b border-[var(--primary-colour)] pb-2" onClick={()=>navQuiz(quiz.quizId)}>
                <h3 className="text-lg">{quiz.title}</h3>
                </div>
            ))}
            </div>
        ) : (
            <p className="italic text-sm">Noch keine Quizzes erstellt.</p>
        )}
        </section>

        {/* My Sessions */}
        <section className="bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">My Sessions</h2>
        {sessions.length > 0 ? (
            <div className="space-y-2">
            {sessions.map((session) =>
                !session.moderator ? (
                <div key={session._id} className="border-b border-[var(--primary-colour)] pb-2" onClick={()=>navSession(session.quizId, session.sessionId)}>
                    <h3 className="text-lg">{session.sessionName}</h3>
                </div>
                ) : null
            )}
            </div>
        ) : (
            <p className="italic text-sm">Keine Sessions gefunden.</p>
        )}
        </section>

    {/* My Shows */}
    <section className="bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">My Shows</h2>
        {sessions.length > 0 ? (
            <div className="space-y-2">
            {sessions.map((session) =>
                session.moderator ? (
                <div key={session._id} className="border-b border-[var(--primary-colour)] pb-2" onClick={()=>navSessionMod(session.quizId, session.sessionId)}>
                    <h3 className="text-lg">{session.sessionName}</h3>
                </div>
                ) : null
            )}
            </div>
        ) : (
            <p className="italic text-sm">Keine Shows als Moderator aktiv.</p>
        )}
    </section>

  </div>
</div>

    )
}

export default OwnContent
