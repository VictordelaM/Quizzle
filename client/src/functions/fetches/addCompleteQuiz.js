export const addCompleteQuiz = async (quiz) => {
    const bodyData = {
        title: quiz.title,
        categories: quiz.categories,
    }
    try {
        const responseQuiz = await fetch(import.meta.env.VITE_BACKEND_URL + '/quiz/addCompleteQuiz', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData),
        credentials: 'include',
        });
        if (!responseQuiz.ok) {
        throw new Error('Fehler beim Hinzufügen des Quizzes');
        }

        const quizData = await responseQuiz.json();
        const userQuizData = {
            quizId : quizData.quiz.quizId,
            quizTitle : quizData.quiz.title
        }
        const responseUser = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addOwnQuiz', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userQuizData),
            credentials: 'include',
            });
            if (!responseUser.ok) {
            throw new Error('Fehler beim Hinzufügen des Quizzes');
            }
            const userData = await responseUser.json();
        return userData;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    };