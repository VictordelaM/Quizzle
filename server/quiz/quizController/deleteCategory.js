import { Quiz } from "../quizModel/quizModel.js";

export const deleteCategory = async (req, res) => {
    try {
        const { quizId, categoryId} = req.params; 

        //search Quiz by id
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        // search category by id
        const initialLength = quiz.categories.length;
        quiz.categories = quiz.categories.filter(q => q._id.toString() !== categoryId);

        if (quiz.categories.length === initialLength) {
            return res.status(404).json({ error: "Kategorie nicht gefunden" });
        }

        // save new quiz
        await quiz.save();

        res.status(200).json({ message: "Kategorie erfolgreich gelöscht" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
