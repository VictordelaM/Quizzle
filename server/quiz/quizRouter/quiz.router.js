import express from "express";
import multer from "multer";
import { addQuiz } from "../quizController/addQuiz.js";
import { getQuizByID } from "../quizController/getQuizByID.js";
import { deleteQuizByID } from "../quizController/deleteQuizByID.js";
import { addCategoryToQuiz } from "../quizController/addCategoryToQuiz.js";
import { addQuestionToCategory } from "../quizController/addQuestionToCategory.js";
import { deleteQuestion } from "../quizController/deleteQuestion.js";
import { deleteCategory } from "../quizController/deleteCategory.js";
import { addAnswerToQuestion } from "../quizController/addAnswerToQuestion.js";
import { setActiveQuestion } from "../quizController/setActiveQuestion.js";
import { addAnswer } from "../quizController/addAnswer.js";
import { getActiveQuesiton } from "../quizController/getActiveQuestion.js";
import { createSession } from "../quizController/createSession.js";
import { joinSession } from "../quizController/joinSession.js";
import { addPoints } from "../quizController/addPoints.js";
import { getEveryQuiz } from "../quizController/getEveryQuiz.js";
import { getSessionData } from "../quizController/getSessionData.js";
import { checkRepeatAnswer, checkRepeatParticipant } from "../../middleware/checkRepeat.js";
import { deleteOpenCategory } from "../quizController/deleteOpenCategory.js";
import { getOpenCategories } from "../quizController/getOpenCategories.js";
import { addCompleteQuiz } from "../quizController/addCompleteQuiz.js";

const quizRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })




//!GET
quizRouter.get("/getQuizByID/:quizId", mult.none(), getQuizByID)
quizRouter.get("/getActiveQuesiton/quiz/:quizId/session/:sessionId", mult.none(), getActiveQuesiton)
quizRouter.get("/getEveryQuiz", mult.none(), getEveryQuiz)
quizRouter.get("/getSessionData/quiz/:quizId/session/:sessionId", mult.none(), getSessionData)
quizRouter.get("/getOpenCategories/quiz/:quizId/session/:sessionId", mult.none(), getOpenCategories)

//!DELETE
quizRouter.delete("/deleteOpenCategory/quiz/:quizId/session/:sessionId/category/:categoryId", mult.none(), deleteOpenCategory)
quizRouter.delete("/deleteQuestion/:quizId/:categoryId/:questionId", mult.none(), deleteQuestion)
quizRouter.delete("/deleteCategory/:quizId/:categoryId", mult.none(), deleteCategory)
quizRouter.delete("/deleteQuizByID/:id", mult.none(), deleteQuizByID)

//!POST
quizRouter.post("/addCompleteQuiz", mult.none(), addCompleteQuiz) //body: title categories (with questions)
quizRouter.post("/addQuiz", mult.none(), addQuiz) //body: title
quizRouter.post("/createSession/quiz/:quizId", mult.none(), createSession)
quizRouter.post("/addCategoryToQuiz/:quizId", mult.none(), addCategoryToQuiz)//body: categoryName
quizRouter.post("/addQuestionToCategory/:quizId/:categoryId", mult.none(), addQuestionToCategory) //body:questionText,questionType,options,correctAnswer,videoLink,imgLinks

quizRouter.post("/joinSession/quiz/:quizId/session/:sessionId", mult.none(), checkRepeatParticipant, joinSession) //body: username, userId
quizRouter.post("/setActiveQuestion/quiz/:quizId/session/:sessionId", mult.none(), setActiveQuestion) //body: categoryId, category, questionId , questionType, questionText , correctAnswer, imgLinks, videoLink, options
quizRouter.post("/addAnswer/quiz/:quizId/session/:sessionId", mult.none(), checkRepeatAnswer, addAnswer) //body: answer, username, userId,  categoryId, questionId
quizRouter.post("/addPoints/quiz/:quizId/session/:sessionId", mult.none(), addPoints) //body: answer, userId, category, categoryId, question, questionId, points

// quizRouter.post("/addAnswerToQuestion/:quizId/:categoryId/:questionId", mult.none(), addAnswerToQuestion)//body: answer, username

//!Austehend
//?edit correctAnswer


export default quizRouter