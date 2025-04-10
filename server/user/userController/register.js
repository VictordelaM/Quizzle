import bcrypt from "bcrypt";
import { User } from "../userModel/userModel.js";

export const register = async (req,res,next)=>{
    try {
        const {username, password} = req.body;
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ username, passwordHash: hash});
            next()


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}