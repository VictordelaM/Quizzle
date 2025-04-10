import { Quiz } from "../quizModel/quizModel.js";

export const deleteQuizByID = async (req, res) =>{
    try {
        const { id } = req.params;
        const questions = await Quiz.findOneAndDelete({ quizId: id });
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}