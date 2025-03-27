import { Question } from "../questionModel/question.model.js";

export const addQuestion = async (req,res)=>{
    try {
            const { question, answer, category} = req.body;
            if (!question || !answer) {
                res.sendStatus(403);
                return;
            }  
            console.log(question, answer)
            const user = await Question.create({ question, answer, category })
            res.json({ status: "ok",  question, answer, category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}