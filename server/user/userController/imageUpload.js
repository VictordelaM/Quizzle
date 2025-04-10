import { User } from "../userModel/userModel.js"
import jwt from 'jsonwebtoken'
import { uploadImage } from "../../utils/imgUpload.js"

export const imageUpload = async (req, res) =>{
    try{
        const userId = jwt.decode(req.cookies.token).id
        const uploadResult = await uploadImage(req.file.buffer)
        const imgUrl = uploadResult.secure_url
        const user = await User.findOneAndUpdate(
            {userId:userId},
            {pictureUrl: imgUrl}
        )
        res.json(user)
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}