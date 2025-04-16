import express from "express";
import multer from "multer";
import { addFeedback } from "../controller/feedback.controller.js";


const feedbackRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })


feedbackRouter.post("/addFeedback", mult.none(), addFeedback) //body: username, feedback 

export default feedbackRouter