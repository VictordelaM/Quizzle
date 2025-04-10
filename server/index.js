import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import 'dotenv/config'
import quizRouter from "./quiz/quizRouter/quiz.router.js";
import userRouter from "./user/userRouter/userRouter.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";


await mongoose.connect(process.env.MOGODB_URI)

const PORT  = 3000
const app = express()


cloudinary.config({
    cloud_name: "dvuefu0mx",
    api_key: "736547154696513",
    api_secret: process.env.CLOUDINARY_SECRET,
    });


app.use(cors({ origin: process.env.CORS_ACCESS.trim(), credentials: true }))
app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))


app.use('/user', userRouter)
app.use('/quiz', quizRouter)


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})