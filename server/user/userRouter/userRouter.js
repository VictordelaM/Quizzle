import express from "express";
import multer from "multer";
import { register } from "../userController/register.js";
import { login } from "../userController/login.js";
import { getUser } from "../userController/getUser.js";
import { addAnswer } from "../userController/addAnswer.js";
import { imageUpload } from "../userController/imageUpload.js";
import { getUserImg, getUserImgById } from "../userController/getUserImg.js";
import { checkRepeatName } from "../../middleware/checkRepeat.js";
import { addOwnQuizzes } from "../userController/addOwnQuizzes.js";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })


userRouter.post("/register", mult.none(), checkRepeatName ,register, login) //body: username, password 
userRouter.post("/login", mult.none(), login) //body: username, password 
// userRouter.post("/addPoints", mult.none(), addPoints)
userRouter.get("/getUser", mult.none(), getUser) 
userRouter.patch("/addImg", mult.single("image"), imageUpload)
userRouter.post("/addAnswer", mult.none(), addAnswer) //body: userId, username, answer
userRouter.get("/getUserImg", mult.none(), getUserImg)
userRouter.get("/getUserImgById/:userId", mult.none(), getUserImgById)
userRouter.post('/addOwnQuiz', mult.none(), addOwnQuizzes) //body: quizId, quizTitle
export default userRouter