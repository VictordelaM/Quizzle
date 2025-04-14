export const getOpenCategories = async (quizId, sessionId) => {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/quiz/getOpenCategories/quiz/" + quizId + "/session/" + sessionId;
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Daten");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch-Fehler:", error);
    }
}

export const deleteOpenCategory = async (quizId, sessionId, categoryId) => {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/quiz/deleteOpenCategory/quiz/" + quizId + "/session/" + sessionId + "/category/" + categoryId;
        const response = await fetch(url, { method: "DELETE" });
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Daten");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch-Fehler:", error);
    }
}