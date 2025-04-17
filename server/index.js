import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import 'dotenv/config'
import quizRouter from "./quiz/quizRouter/quiz.router.js";
import userRouter from "./user/userRouter/userRouter.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import feedbackRouter from "./feedback/router/feedback.router.js";
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const clientBuildPath = path.join(__dirname, '../client/dist')

await mongoose.connect(process.env.MOGODB_URI)

const PORT  = 3000
const app = express()


cloudinary.config({
    cloud_name: "dvuefu0mx",
    api_key: "736547154696513",
    api_secret: process.env.CLOUDINARY_SECRET,
    });

app.use(express.static(clientBuildPath))
app.use(cors({ origin: process.env.CORS_ACCESS.trim(), credentials: true }))
app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))


app.use('/user', userRouter)
app.use('/quiz', quizRouter)
app.use('/feedback', feedbackRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'))
  })

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})