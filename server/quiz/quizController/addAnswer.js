import { Quiz } from "../quizModel/quizModel.js";
import jwt from 'jsonwebtoken'

export const addAnswer = async (req, res) => {
    try {
        const { quizId, sessionId} = req.params;
        const {answer, userImg, categoryId, category, questionId, } = req.body;
        const quiz = await Quiz.findOne({ quizId });
        const user = jwt.decode(req.cookies.token)
        
        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);

        if (!session) {
            return res.status(404).json({ error: "Session nicht gefunden" });
        }

        const log = session.log(log => log.questionId.toString() === questionId);

        if(!log){
            session.log.push({
                quesionId: questionId,
                questionText:questionText,
                category:category,
                categoryId: categoryId,
                answers:[{
                    username: user.username,
                    userId: user.userId,
                    answer: answer,
                    points: points
                }]
            })
        }else {
            log.answers.push({
                username: user.username,
                userId: user.userId,
                answer: answer,
                points: points
            })
        }
        
        session.activeQuestion.answers.push({
            username: username,
            userId: userId,
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
