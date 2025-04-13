import React, { useEffect, useState } from 'react'
import { registerFetch } from '../functions/fetches/userfetches'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const [logged, setLogged] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(logged){
            navigate('/')
        }
    },[logged])


    const login = async(event) => {
        event.preventDefault()
        registerFetch(event)

        setLogged(true)
    }

    const navLogin = () =>{
        navigate('/login')
    }
    return (
    
        <form className="flex flex-col justify-center gap-[5%] items-center w-[90%] h-[25%] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 " onSubmit={login}>
            <div  className='flex flex-col gap-[1vh]'>
                <div className='flex gap-[5%]'>
                    <label htmlFor="inputPassword">username</label>
                    <input className='border w-[100%]' type="text" name="inputUsername" />
                </div>
                <div className='flex gap-[5%]'>
                    <label htmlFor="inputPassword">password</label>
                    <input className='border w-[100%]' type="password" name="inputPassword" />
                </div>
                <p className='text-xs'>Du hast schon ein Konto? <span onClick={navLogin} className='underline'>Hier gehts zum Login</span></p>
            </div>

            <button className="bg-blue-600 w-[30%] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Register</button>
        </form>
  )
}

export default RegisterForm
