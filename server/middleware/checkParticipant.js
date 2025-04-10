import { Quiz } from "../quiz/quizModel/quizModel.js"
import jwt from 'jsonwebtoken'


export const checkParticipant = async(req, res, next)=>{
    const userId = jwt.decode(req.cookies.token).id
    const {quizId, sessionId} = req.params

    try {
        const quiz = await Quiz.findOne({ quizId });
    
        const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);
        
        const participant = session.participants.find(participant => participant.userId.toString() === userId);
    
            if (!participant) {
                return res.status(403).json({ error: "Nutzer ist kein Teilnehmer der Session" });
            } else {
                next()
            }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}