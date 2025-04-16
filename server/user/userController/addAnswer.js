import {User} from '../userModel/userModel.js'

export const addAnswer = async(req,res) =>{
    try{
        const {userId, username, answer} = req.body
            
        const user = await User.findOne({userId:userId})
        user.answeredQuestions.push( {
            userId: userId,
            username: username,
            answer: answer
        }) 
        await quiz.save();
        res.send(user.answeredQuestion)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}