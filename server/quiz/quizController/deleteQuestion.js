import { Quiz } from "../quizModel/quizModel.js";

export const deleteQuestion = async (req, res) => {
    try {
        const { quizId, categoryId, questionId } = req.params; // quizId & categoryId aus der URL

        // search Quiz by id
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        // search category by id
        const category = quiz.categories.find(cat => cat._id.toString() === categoryId);

        if (!category) {
            return res.status(404).json({ error: "Kategorie nicht gefunden" });
        }

        // search question and delete
        const initialLength = category.questions.length;
        category.questions = category.questions.filter(q => q.questionId.toString() !== questionId);

        if (category.questions.length === initialLength) {
            return res.status(404).json({ error: "Frage nicht gefunden" });
        }

        // save new quiz
        await quiz.save();

        res.status(200).json({ message: "Frage erfolgreich gelöscht" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
