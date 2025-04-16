import {User} from '../userModel/userModel.js'
import jwt from 'jsonwebtoken'

export const addOwnQuizzes= async(req,res) =>{
    try{
        const {quizId, quizTitle} = req.body
        const userId = jwt.decode(req.cookies.token).id
        const user = await User.findOne({userId:userId})
        const quiz = {
            quizId: quizId,
            quizTitle: quizTitle,
        }
        user.ownQuizzes.push(quiz)
        user.save()
        res.send(user)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

}