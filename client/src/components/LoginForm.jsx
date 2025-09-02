import React, { use, useEffect } from 'react'
import { loginFetch } from '../functions/fetches/userfetches'
import { useNavigate } from 'react-router-dom'
import { getUserFromToken } from '../functions/getUserFromToken'

const LoginForm = () => {

    const navigate = useNavigate()
    
    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const tokenCookie = cookies.find(row => row.startsWith("token="))
        if (tokenCookie){
            navigate('/')
        }
    },[])
    
    const login = async(event) => {
        event.preventDefault()
        await loginFetch(event)
        location.reload()
    }
    const navRegister = () =>{
        navigate('/register')
    }
    return (
    
        <form className="flex flex-col justify-center items-center w-[85%] p-[5%] h-fit  bg-[var(--secondary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 " onSubmit={login}>
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
            
            <button type="submit" className="bg-[var(--primary-colour)] w-[30%] hover:bg-[var(--primary-colour-acsent)] text-[var(--secondary-colour)] font-semibold py-2 px-4 mt-[10%] rounded-lg shadow-md transition duration-300">Login</button>
        </form>
    )
}

export default LoginForm
