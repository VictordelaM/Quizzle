import { Quiz } from "../quizModel/quizModel.js";


export const addCategoryToQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const { categoryName  } =  req.body; 

        const quiz = await Quiz.findOne({ quizId: quizId });

        if (!quiz) {
            return res.status(404).json({ message: "Quiz nicht gefunden" });
        }
        console.log(quiz)
        // check if category exists
        const categoryExists = quiz.categories.some(cat => cat.categoryName.toLowerCase() === categoryName.toLowerCase());
        if (categoryExists) {
            return res.status(400).json({ message: `Kategorie '${category}' existiert bereits im Quiz.` });
        }
        const category = {
            categoryName : categoryName,
            questions: []
        }
        // New category with empty questions array
        quiz.categories.push(category);

        await quiz.save();
        res.status(200).json({ message: "Kategorie hinzugefügt", quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Interner Serverfehler" });
    }
};