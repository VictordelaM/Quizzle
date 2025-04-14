import { Quiz } from "../quizModel/quizModel.js";

export const getOpenCategories = async (req, res) => {
    try {
        const { quizId, sessionId } = req.params;
        const quiz = await Quiz.findOne({ quizId: quizId });

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }
        const session = await quiz.sessions.find((session => session.sessionId.toString() === sessionId));
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        const openCategories = session.openCategories

        res.status(200).json(openCategories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}