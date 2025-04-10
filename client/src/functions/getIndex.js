import { fetchQuizData } from "./fetches/getQuizData"

export const getIndex = async(quizId,activeQuestion)=>{

    const response = await fetchQuizData(quizId)
    const length = response.categories.length  
    const index = response.categories.findIndex((cat)=>cat.categoryId == activeQuestion?.categoryId)
    
    const data = {index: index+1, length: length}
    return data
}