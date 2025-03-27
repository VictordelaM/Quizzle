import {Question} from '../questionModel/question.model.js'


export const deleteQuestion = async (req, res) =>{
    try {
        const { id } = req.params;
        const questions = await Question.findOneAndDelete({ _id: id });
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}