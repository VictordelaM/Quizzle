import { getUserByUsername, getUserImage } from "./userfetches";

export const addQuiz = async (title) => {
    const bodyData = {
        title: title,
        questions: []
    }
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/addQuiz', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData),
        });
        if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen der Session');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    };

export const addCategoryFetch = async(event)=>{
    try{
        const category = event.target.addCategoryInput.value
        const quizId = event.target.quizIdInput.value
        const categoryData = {category: category}
        const url = import.meta.env.VITE_BACKEND_URL + '/quiz/addCategoryToQuiz/'+quizId
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(categoryData),
            });
            if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Kategorie');
            }
    
            const data = await response.json();
            return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}

export const addQuestionFetch = async(event) =>{
    try{
        const question = event.target.questionTextInput.value
        const answer = event.target.correctAnswerInput.value
        const quizId = event.target.quizIdInput.value
        const categoryId = event.target.categoryIdInput.value
        const questionData = {questionText: question, correctAnswer: answer}
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/addQuestionToCategory/'+quizId+'/'+categoryId, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(questionData),
            });
            if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Frage');
            }
    
            const data = await response.json();
            return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}

export const createSession = async(quizId) =>{
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/createSession/quiz/'+ quizId, {
            method: 'POST',
            });
            if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Frage');
            }
            const data = await response.json();
            return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}

export const joinSession = async(quizId, sessionId) =>{
    try{
        const img = await getUserImage()
        const body = {img: img}
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/joinSession/quiz/' + quizId + '/session/' + sessionId, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
            credentials: 'include'
            });
            if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Frage');
            }
            const data = await response.json();
            return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}

export const getSessionData = async (quizId, sessionId) =>{
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/getSessionData/quiz/'+ quizId  + '/session/' + sessionId, {
            method: 'GET',
            });
            if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen der Frage');
            }
            const data = await response.json();
            return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}