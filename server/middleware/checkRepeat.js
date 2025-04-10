import { User } from "../user/userModel/userModel.js";
import { Quiz } from "../quiz/quizModel/quizModel.js"
import jwt from 'jsonwebtoken'


export const checkRepeatName = async (req,res,next)=>{
    const { username } = req.body;
    try {
        const user = await User.findOne({ username }).lean();
        if (user) {
            return res.status(409).json({ error: "Username bereits vergeben." });

        } else {
            next()
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const checkRepeatAnswer = async (req,res,next)=>{
    const {quizId, sessionId} = req.params
    const userId = jwt.decode(req.cookies.token).id

    try {
    const quiz = await Quiz.findOne({ quizId });

    const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);
    
    const userAnswer = session.answers.find(answer => answer.userId.toString() === userId);

        if (userAnswer) {
            return res.status(409).json({ error: "Antwort bereits gegeben" });
        } else {
            next()
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const checkRepeatParticipant = async (req,res,next)=>{
    const {quizId, sessionId} = req.params

    const userId = jwt.decode(req.cookies.token).id

    try {
    const quiz = await Quiz.findOne({ quizId });

    const session = quiz.sessions.find(session => session.sessionId.toString() === sessionId);
    
    const userAnswer = session.participants.find(participant => participant.userId.toString() === userId);

        if (userAnswer) {
            return res.status(409).json({ error: "User already participates" });
        } else {
            next()
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}