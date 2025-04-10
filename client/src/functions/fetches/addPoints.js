export const addPoints = async(bodyData)=>{
    try{
        // const bodyData= {
        //     answer: answer, 
        //     userId: userId, 
        //     category: category, 
        //     categoryId: categoryId,
        //     question: question, 
        //     questionId: questionId,
        //     points: points
        // }
        console.log('bodydata:', bodyData)
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