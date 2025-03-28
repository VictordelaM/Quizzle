import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import 'dotenv/config'
import userRouter from "./user/userRouter/user.router.js";
import questionRouter from "./questions/questionRouter/question.router.js";


await mongoose.connect(process.env.MOGODB_URI)

const PORT  = 3000
const app = express()

app.use(cors())
app.use(express.json()); // JSON-Parser für den Request-Body
app.use(express.urlencoded({ extended: true }))


app.use('/user', userRouter)
app.use('/questions', questionRouter)


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})