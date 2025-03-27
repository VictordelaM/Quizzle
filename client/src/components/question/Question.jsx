import React, { useState } from 'react'
import { addUser } from '../../functions/fetches/userfetches.js'

const Question = () => {    
    const handleSubmit = async(event) =>{
        event.preventDefault()
        // console.log(event.target.password.value)
        // const username = event.target.username.value
        // const password = event.target.password.value
        // const formData = {
        //     username: username,
        //     password: password
        // }
        try {
            const response = await addUser(event);
            console.log('User erfolgreich hinzugefügt:', response);
            } 
        catch (error) {console.error('Fehler beim Hinzufügen des Benutzers:', error);}
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" />
            <input type="text" name="password" id="password" />
            <button type="submit">sub</button>
        </form>
        
    </div>
  )
}

export default Question
