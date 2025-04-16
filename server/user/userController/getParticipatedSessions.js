import jwt from 'jsonwebtoken'
import { User } from '../userModel/userModel.js';

export const getParticipatedSessions = async (req, res) => {
    try {
        const userId = jwt.decode(req.cookies.token).id
        const user = await User.findOne({ userId: userId }); 
        res.json(user.participatedSessions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}