import { Quiz } from "../quizModel/quizModel.js";
import jwt from 'jsonwebtoken'

export const addAnswer = async (req, res) => {
    try {
        const { quizId, sessionId} = req.params;
        const {answer, userImg, categoryId, category, questionId,questionText } = req.body;
        const quiz = await Quiz.findOne({ quizId });
        const user = jwt.decode(req.cookies.token)
        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }
        const session = quiz?.sessions?.find(session => session.sessionId.toString() === sessionId);

        if (!session) {
            return res.status(404).json({ error: "Session nicht gefunden" });
        }

        const log = session?.log?.find(log => log.questionId === questionId);
        if(!log){
            session.log.push({
                questionId: questionId,
                questionText:questionText,
                categoryName:category,
                categoryId: categoryId,
                answers:[{
                    username: user?.username,
                    userId: user?.id,
                    answer: answer,
                }]
            })
        }else {
            log.answers.push({
                username: user.username,
                userId: user.id,
                answer: answer,
            })
        }
        session.activeQuestion.answers.push({
            username: user?.username,
            userId: user?.id,
            quesionId: questionId,
            answer: answer,
            userImg : userImg
        })
        await quiz.save();

        res.status(200).json({ message: "Antwort erfolgreich hinzugefügt", answer});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
