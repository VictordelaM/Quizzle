import jwt from 'jsonwebtoken'
import { User } from '../userModel/userModel.js';

export const getUserImg = async (req, res) =>{
    try {
        const userId = jwt.decode(req.cookies.token).id
        const user = await User.findOne({ userId: userId }); 
        res.json(user.pictureUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getUserImgById = async (req, res) =>{
    try {
        const {userId} = req.params
        const user = await User.findOne({ userId: userId }); 
        res.json(user.pictureUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}