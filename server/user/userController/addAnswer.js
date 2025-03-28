import { User } from "../userModel/user.model.js";

export const addAnswer = async (req,res)=>{
    try {
            const { username ,answer , questionID} = req.body;
            if (!username || !answer || !questionID) {
                res.sendStatus(403);
                return;
            }  
            const user = await User.findOne({ username })
            user.answers.push({
                answer: answer,
                questionID: questionID
            })
            const writeResult = await user.save();
            res.json(writeResult);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}