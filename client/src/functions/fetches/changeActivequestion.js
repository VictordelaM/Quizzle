

export const changeActiveQuestion = async(quizId, sessionId, next) =>{

    try{
        console.log(next)
        const url = import.meta.env.VITE_BACKEND_URL + '/quiz/setActiveQuestion/quiz/' + quizId + '/session/' + sessionId
        const response = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(next),
            })
        if (!response.ok) {
            throw new Error('Fehler beim anpassen der aktiven Frage');
            }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    
}