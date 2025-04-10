import { Quiz } from "../quizModel/quizModel.js";


export const setActiveQuestion = async (req, res) =>{
    try{
        const { quizId, sessionId } = req.params;
        const { categoryId, categoryName, questionId , questionType, questionText , correctAnswer, imgLinks, videoLink, options} = req.body
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }
        const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);

        if (!session) {
            return res.status(404).json({ error: "Session nicht gefunden" });
        }

        const activeQuestion = {
            category: categoryName,
            categoryId: categoryId,
            questionId: questionId, 
            questionText: questionText,
            questionType: questionType, 
            options: options,
            correctAnswer: correctAnswer,
            videoLink: videoLink,
            imgLinks: imgLinks,
        }
        session.activeQuestion = activeQuestion
        await quiz.save();

        res.status(200).json({ message: "Active Question setted succesfully", quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}