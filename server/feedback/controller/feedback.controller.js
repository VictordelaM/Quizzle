import { Feedback } from "../model/feedback.model";

export const addFeedback = async (req, res) => {
    try {
        const { username, feedback } = req.body;

        // Create a new feedback object
        const newFeedback = {
            username: username,
            feedback: feedback,
        };

        // Save the feedback to the database
        const savedFeedback = await Feedback.create(newFeedback);

        // Send the saved feedback as a response
        res.status(201).json(savedFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}