import { Quiz } from "../quizModel/quizModel.js";

export const getSessionData = async (req, res) =>{
    try {
        const { quizId, sessionId } = req.params; 
        const quiz = await Quiz.findOne({ quizId: quizId }); 
        const session = quiz.sessions.find((session) => sessionId == sessionId)
        res.json(session);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}