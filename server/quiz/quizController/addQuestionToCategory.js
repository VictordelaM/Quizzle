import { Quiz } from "../quizModel/quizModel.js";

export const addQuestionToCategory = async (req, res) => {
    try {
        const { quizId, categoryId } = req.params; 
        const {questionText,correctAnswer} = req.body

        // search Quiz by id
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        // search category by id
        const category = quiz.categories.find(cat => cat.categoryId.toString() === categoryId);

        if (!category) {
            return res.status(404).json({ error: "Kategorie nicht gefunden" });
        }

        const newQuestion = {
            questionText: questionText,
            // questionType: questionType,
            // options: options,
            correctAnswer: correctAnswer,
            // videoLink: videoLink,
            // imgLinks: imgLinks,
        }
        // add question to category
        category.questions.push(newQuestion);

        // save new quiz
        await quiz.save();

        res.status(200).json({ message: "Frage erfolgreich hinzugefügt", quiz });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
