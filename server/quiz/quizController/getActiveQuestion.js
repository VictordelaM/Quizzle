import { Quiz } from "../quizModel/quizModel.js";

export const getActiveQuesiton = async (req, res) =>{

    try {
        const { quizId, sessionId } = req.params; 
        const quiz = await Quiz.findOne({ quizId: quizId }); 

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);

        if (!session) {
            return res.status(404).json({ error: "Session nicht gefunden" });
        }

        const activeQuestion = session.activeQuestion
        res.json(activeQuestion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}