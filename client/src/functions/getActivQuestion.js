export const getActiveQuestion = async(quizId, sessionId) => {

    try {


        const url = import.meta.env.VITE_BACKEND_URL + "/quiz/getActiveQuesiton/quiz/" + quizId + '/session/' + sessionId;


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
