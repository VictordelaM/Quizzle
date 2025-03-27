import {Question} from '../questionModel/question.model.js'


export const getQuestions = async (req, res) =>{
    try {
        const questions = await Question.find().lean();
        console.log(questions)
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}