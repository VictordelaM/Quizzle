import express from "express";
import multer from "multer";
import { addQuestion } from "../questionController/addQuestion.js";
import { getQuestions } from "../questionController/getQuestions.js";
import { deleteQuestion } from "../questionController/deleteQuestion.js";

const questionRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })


questionRouter.post("/add",mult.none(),addQuestion)
questionRouter.get("/get",mult.none(),getQuestions)
questionRouter.patch("/delete/:id", mult.none(), deleteQuestion)

export default questionRouter