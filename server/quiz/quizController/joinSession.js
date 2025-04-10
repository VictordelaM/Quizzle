import { Quiz } from "../quizModel/quizModel.js";
import jwt from 'jsonwebtoken'


export const joinSession = async(req,res) =>{
    try {
            const { quizId, sessionId} = req.params;
            const { img } = req.body
            const user = jwt.decode(req.cookies.token)
            const quiz = await Quiz.findOne({ quizId });
            if (!quiz) {
                return res.status(404).json({ error: "Quiz nicht gefunden" });
            }
            const session = quiz.sessions.find(cat => cat.sessionId.toString() === sessionId);
            if (!session) {
                return res.status(404).json({ error: "Session nicht gefunden" });
            }
            session.participants.push({
                username: user.username,
                userId: user.id,
                userImg: img
            })
            await quiz.save();
    
            res.status(200).json({ message: "Teilnehmer erfolgreich hinzugefügt", user});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
}