import React from 'react'
import { loginFetch } from '../functions/fetches/userfetches'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate()

    const login = async(event) => {
        event.preventDefault()
        await loginFetch(event)
        navigate('/')
    }
    const navRegister = () =>{
        navigate('/register')
    }
    return (
    
        <form className="flex flex-col justify-center gap-[5%] items-center w-[90%] h-[25%] bg-[var(--secondary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 " onSubmit={login}>
            <div className='flex flex-col gap-[1vh]'>
                <div className='flex gap-[5%]'>            
                    <label className='loginLabel' htmlFor="inputPassword">username</label>
                    <input className='border w-[100%] ' type="text" name="inputUsername" />
                </div>
                <div className='flex gap-[5%]'>
                    <label className='loginLabel' htmlFor="inputPassword">password</label>
                    <input className='border w-[100%]' type="password" name="inputPassword"  />
                </div>
                <p className='text-xs'>kein Konto? kein Problem einfach <span onClick={navRegister} className='underline'>hier registrieren</span></p>
            </div>
            
            <button type="submit" className="bg-[var(--primary-colour)] w-[30%] hover:bg-[var(--primary-colour-acsent)] text-[var(--secondary-colour)] font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Login</button>
        </form>
    )
}

export default LoginForm
