import {User} from '../userModel/user.model.js'


export const getUsers = async (req, res) =>{
    try {
        const users = await User.find().lean();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}