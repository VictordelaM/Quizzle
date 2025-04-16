import { User } from "../userModel/userModel.js";
import jwt from 'jsonwebtoken'

export const addParticipatedSessions = async (req, res) => {
    try {
        const { quizId, sessionId, sessionName, moderator } = req.body;
        const userId = jwt.decode(req.cookies.token).id;
        const user = await User.findOne({ userId: userId });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const session = {
            quizId: quizId,
            sessionId: sessionId,
            sessionName: sessionName,
            moderator: moderator,
        };

        user.participatedSessions.push(session);
        await user.save();

        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}