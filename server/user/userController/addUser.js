import bcrypt from "bcrypt";
import { User } from "../userModel/user.model.js";

export const register = async (req,res)=>{
    try {   
            const { username, password} = req.body;
            if (!username || !password) {
                res.sendStatus(403);
                return;
            }  
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ username, passwordHash: hash})
            res.json({ status: "ok", username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}