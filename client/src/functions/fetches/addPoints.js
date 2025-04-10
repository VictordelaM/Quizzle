export const addPoints = async(bodyData)=>{
    try{
        const url = import.meta.env.VITE_BACKEND_URL + '/quiz/addPoints/quiz/'+quizId+'/session/'+sessionId
        const response = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData),
            credentials: "include"
            })
        if (!response.ok) {
            throw new Error('Fehler beim hinzufüger der Punkte von: '+ userId);
            }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}