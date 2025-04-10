import { User } from "../userModel/userModel.js";
import jwt from "jsonwebtoken"

export const getUser = async (req, res) =>{
//!Antwort reduzieren
    try {
        const user = jwt.decode(req.cookies.token)
        const userData = await User.findOne({ userId: user.id });
        res.json(userData)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}