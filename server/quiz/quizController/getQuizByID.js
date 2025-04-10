import { Quiz } from "../quizModel/quizModel.js";

export const getQuizByID = async (req, res) =>{

    try {
        const { quizId } = req.params; 
        const quiz = await Quiz.findOne({ quizId: quizId }); 
        res.json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}