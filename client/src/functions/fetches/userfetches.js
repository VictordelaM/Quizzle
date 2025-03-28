export const addUser = async (event) => {
    try {
        const form = event.target;
        const formData = new FormData(form);
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', {
        method: 'POST',
        body: formData,
        });
        if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen des Benutzers');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
    };

    export const addPoints = async (points, user) => {
        try {
            const pointsObject = {pointsToAdd : points}
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addPoints/' + user, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', },// JSON-Daten kennzeichnen
            body: JSON.stringify(pointsObject),
            });
            if (!response.ok) {throw new Error('Fehler beim Hinzufügen der Punkte');}
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch-Fehler:', error);
            throw error;
        }
        };
    

export const addAnswer = async (a, questionID, user) => {
    try {
        const answer = a
        const body ={
            answer : answer,
            questionID : questionID,
            username: user
        };
        console.log(body)
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addAnswer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
        });
        if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen des Benutzers');
        }
        const data = await response.json();
        return data;
            } catch (error) {
                console.error('Fetch-Fehler:', error);
                throw error;
            }
            };

export const getUsers = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/getAll`, {
        method: 'GET', 
        })
        if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Benutzer');
            }
        const users = await response.json(); // Die Benutzer-Daten aus der Antwort extrahieren
        return users; 
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}