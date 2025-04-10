import { fetchQuizData } from "./fetches/getQuizData"
import { getSessionData } from "./fetches/sessionFetches"

export const getIndex = async(quizId,sessionId)=>{
        const responseSession = await getSessionData(quizId, sessionId)
        const responseQuiz = await fetchQuizData(quizId)

        const category = responseQuiz?.categories?.find((cat)=>cat.categoryId == responseSession?.activeQuestion?.categoryId) 

        const length = category?.questions.length
        const index = category.questions.findIndex((question)=>question.questionId == responseSession?.activeQuestion?.questionId)
        
        const data = {index: index+1, length: length}
        return data
    }
