import { Quiz } from "../quizModel/quizModel.js";

export const getEveryQuiz = async (req, res) =>{
    try{
                const quiz = await Quiz.find();
                res.json(quiz);
        
    } catch (error){
        console.log(error)
        res.status(550).json({error: "Internal server error"})
    }
}