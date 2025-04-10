
import { getUser } from "./userfetches";

export const setAnswer = async (quizId, sessionId, questionId,questionText, categoryId, category, event) =>{
    try{ 
        const answerInput = event.target.answerInput.value;
        const userData = await getUser()
        const answer = {
            answer: answerInput,
            userImg: userData.pictureUrl,
            questionId: questionId,
            questionText: questionText,
            category: category,
            categoryId: categoryId
        }
        console.log(answer)
        const url = import.meta.env.VITE_BACKEND_URL+'/quiz/addAnswer/quiz/'+ quizId + '/session/' + sessionId 
        const response = await fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(answer),
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Antwort');
            }
    }catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    
}

