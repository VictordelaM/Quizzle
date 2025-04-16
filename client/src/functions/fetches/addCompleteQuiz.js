export const addCompleteQuiz = async (quiz) => {
    const bodyData = {
        title: quiz.title,
        categories: quiz.categories,
    }
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/addCompleteQuiz', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData),
        });
        if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen des Quizzes');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    };