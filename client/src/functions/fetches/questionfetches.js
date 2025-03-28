export const getQuestions = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/questions/get`, {
        method: 'GET', 
        })
        if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Fragen');
            }
        const question = await response.json();
        return question
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}