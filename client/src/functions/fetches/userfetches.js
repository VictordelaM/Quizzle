export const addUser = async (event) => {
    try {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        console.log('form:', form)
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: formData, // Formulardaten als JSON senden
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