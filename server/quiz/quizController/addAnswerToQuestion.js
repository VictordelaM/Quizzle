import { Quiz } from "../quizModel/quizModel.js";

export const addAnswerToQuestion = async (req, res) => {
    try {
        const { quizId, categoryId, questionId } = req.params;
        const {answer, username} = req.body;

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
        // search question by id
        const question = category.questions.find(quest => quest.questionId.toString() === questionId);

        // add answer to question
        question.answers.push({username: username, answer: answer});

        // save new Quiz
        await quiz.save();

        res.status(200).json({ message: "Antwort erfolgreich hinzugefügt", answer});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
