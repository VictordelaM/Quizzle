import React from 'react'
import { registerFetch } from '../functions/fetches/userfetches'

const RegisterForm = () => {
    const login = async(event) => {
        event.preventDefault()
        registerFetch(event)
    }
    return (
    
    <div>
        <form onSubmit={login}>
            <label htmlFor="inputPassword">username</label>
            <input type="text" name="inputUsername" />
            <label htmlFor="inputPassword">password</label>
            <input type="password" name="inputPassword" />
            <button>submit</button>
        </form>
    </div>
  )
}

export default RegisterForm
