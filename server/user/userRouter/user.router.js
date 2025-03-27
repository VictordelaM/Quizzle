import express from "express";
import multer from "multer";
import { register } from "../userController/addUser.js";
import { getUsers } from "../userController/getUsers.js";
import { addAnswer } from "../userController/addAnswer.js";
import { addPoints } from "../userController/addPoints.js";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

//? checkRepeatName,  checkRepeatEmail,   login
userRouter.post("/register",mult.none(),register)
userRouter.get("/getAll",mult.none(), getUsers)
userRouter.post("/addAnswer", mult.none(), addAnswer)
userRouter.patch("/addPoints/:username", mult.none(), addPoints)


export default userRouter