export const fetchQuizData = async (quizId) => {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/quiz/getQuizByID/" + quizId;
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Daten");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch-Fehler:", error);
    }
};