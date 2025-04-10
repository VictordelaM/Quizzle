import { Quiz } from "../quizModel/quizModel.js";

export const addQuiz = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const newQuiz = new Quiz({ title });
        await newQuiz.save();

        res.status(201).json({ message: "Quiz created", quiz: newQuiz });
    } catch (error) {
        console.error("Error creating quiz:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
