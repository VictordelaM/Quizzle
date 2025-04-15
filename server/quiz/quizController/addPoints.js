import { Quiz } from "../quizModel/quizModel.js";
import jwt from 'jsonwebtoken'

export const addPoints = async (req, res) => {
    try {
        const { quizId, sessionId} = req.params;
        const {answer, category, categoryId, question, questionId, points, userId, username} = req.body;
        const quiz = await Quiz.findOne({ quizId });
        
        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        const session = quiz.sessions.find(cat => cat.sessionId.toString() === sessionId);

        if (!session) {
            return res.status(404).json({ error: "Session nicht gefunden" });
        }

        const participant = session.participants.find(participant => participant.userId.toString() === userId);

        if (!participant) {
            return res.status(404).json({ error: "participant nicht gefunden" });
        }

        participant.points.push({
            category: category,
            categoryId: categoryId,
            question: question,
            questionId: questionId,
            answer: answer,
            points: points,
        })

        await quiz.save();

        res.status(200).json({ message: "Antwort erfolgreich hinzugefügt", answer});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
