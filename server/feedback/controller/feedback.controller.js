import { Feedback } from "../model/feedback.model.js";
import jwt from 'jsonwebtoken'

export const addFeedback = async (req, res) => {
    try {
        const { feedback, anonym } = req.body;
        let newFeedback
        if(anonym){
            newFeedback = {
                username: "anonym",
                feedback: feedback,
            }
        }else{
            console.log(jwt.decode(req.cookies.token))
            newFeedback = {
                username: jwt.decode(req.cookies.token).username,
                feedback: feedback,
            };
        }


        // Save the feedback to the database
        const savedFeedback = await Feedback.create(newFeedback);

        // Send the saved feedback as a response
        res.status(201).json(savedFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}