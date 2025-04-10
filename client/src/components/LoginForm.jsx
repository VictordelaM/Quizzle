import React from 'react'
import { loginFetch } from '../functions/fetches/userfetches'

const LoginForm = () => {
    const login = async(event) => {
        event.preventDefault()
        loginFetch(event)
    }
    return (
    
        <form className='loginForm' onSubmit={login}>
            <div>            
                <label className='loginLabel' htmlFor="inputPassword">username</label>
                <input className='userTextInput' type="text" name="inputUsername" />
            </div>
            <div>
            <label className='loginLabel' htmlFor="inputPassword">password</label>
                <input className='userTextInput' type="password" name="inputPassword"  />
            </div>
            <button className='loginButton' >submit</button>
        </form>
    )
}

export default LoginForm
