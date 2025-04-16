import { Quiz } from "../quizModel/quizModel.js";
import { v4 as uuidv4 } from "uuid";
import jwt from 'jsonwebtoken'

export const createSession = async (req, res) => {
    try {
        const { quizId } = req.params;
        const user = jwt.decode(req.cookies.token)
        const { sessionName, description } = req.body;
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
            return res.status(404).json({ error: "Quiz nicht gefunden" });
        }

        const openCategories = quiz.categories.map(category => ({
            category: category.categoryName,
            categoryId: category.categoryId
        }));

        const newSession = {
            sessionId: uuidv4(),
            sessionName: sessionName,
            description: description,
            moderator: user?.id,
            openCategories: openCategories,
        };

        quiz.sessions.push(newSession);

        await quiz.save();

        res.status(201).json({
            message: "Session erfolgreich erstellt",
            session: newSession
        });

    } catch (error) {
        console.error("Fehler beim Erstellen der Session:", error);
        res.status(500).json({ error: "Interner Serverfehler" });
    }
};