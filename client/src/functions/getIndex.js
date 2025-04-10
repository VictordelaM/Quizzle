import { fetchQuizData } from "./fetches/getQuizData"

import { getActiveQuestion } from "./getActivQuestion"

export const getIndex = async(quizId,sessionId)=>{
        const responseAQ = await getActiveQuestion(quizId, sessionId)
        const responseQuiz = await fetchQuizData(quizId)
        const category = responseQuiz?.categories?.find((cat)=>cat.categoryId == responseAQ?.categoryId) 
        const length = category?.questions.length
        const index = category.questions.findIndex((question)=>question.questionId == responseAQ?.questionId)

        const data = {index: index+1, length: length}
        // console.log(responseSession?.  activeQuestion)
        // console.log(category.questions,responseSession?.activeQuestion?.questionId)
        return data
    }
