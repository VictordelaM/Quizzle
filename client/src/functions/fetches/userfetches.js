
import { getUserFromToken } from "../getUserFromToken";

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





export const loginFetch = async(event) =>{
    try {
        const username = event.target.inputUsername.value
        const password = event.target.inputPassword.value
        const userData = {username: username, password: password}
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
        credentials: "include"
        });
        if (!response.ok) {
        throw new Error('Fehler beim Login');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}
//!passwort noch verschlüsseln
export const registerFetch = async(event) =>{
    try {
        const username = event.target.inputUsername.value
        const password = event.target.inputPassword.value
        const userData = {username: username, password: password}
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
        credentials: "include"
        });
        console.log(response)
        if (!response.ok) {
        throw new Error('Fehler beim Login');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        throw error;
    }
}

export const getUserByUsername = async () =>{
    try{
        const username = getUserFromToken()
        const user = await fetch(import.meta.env.VITE_BACKEND_URL+ '/user/getUser/'+ username,{
            method: 'GET',
        } )
        const data = await user.json()
        return data
    }catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;        
    }
}

export const getUser = async () => {
    try{
        const user = await fetch(import.meta.env.VITE_BACKEND_URL+ '/user/getUser',{
            method: 'GET',
            credentials: "include",
        } )
        const data = await user.json()
        return data
    }catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;        
    }
}

export const uploadImg = async(values)=>{
    try{
        const formData = new FormData();
        formData.append('image', values);
        const responseAddImage = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addImg', {
            method: 'PATCH',
            body: formData,
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}

export const getUserImage = async() =>{
    try{
        const user = await fetch(import.meta.env.VITE_BACKEND_URL+ '/user/getUserImg',{
            method: 'GET',
            credentials: "include",
        } )
        const data = await user.json()
        return data
    }catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;        
    }
}

export const getUserImageById = async(userId) =>{
    try{
        const user = await fetch(import.meta.env.VITE_BACKEND_URL+ '/user/getUserImgById/'+userId,{
            method: 'GET',
        } )
        const data = await user.json()
        return data
    }catch(error){
        console.error('Fetch-Fehler:', error);
        throw error;        
    }
}