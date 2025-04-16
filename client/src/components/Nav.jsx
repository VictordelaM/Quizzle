import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'
import home from '../assets/home-svgrepo-com.svg'
import leftArrow from '../assets/arrow-sm-left-svgrepo-com.svg'
import './stylesheets/Nav.css'
import { useNavigate } from 'react-router-dom'
import logoDark from '../assets/F413514D-5D3F-4D94-8CDD-3B42D5A1A9881744663182-removebg-preview.png'
import logoLight from '../assets/B9895F82-0799-4D0C-B0AE-14E18E410421.jpg'

const Nav = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    useEffect(()=>{
        const getUserData = async()=>{
            const data = await getUser()
            setUser(data)
        }
        getUserData()
    },[])


    const navSettings = () =>{
        navigate('/userSettings')
    }
    const navHome = () =>{
        navigate('/')
    }
    const navBack = () =>{
        navigate(-1)
    }
    const navRegister = () =>{
        navigate('/register')
    }
    const navLogin = () =>{
        navigate('/login')
    }
    return (
        <div className="navBox sticky flex bg-[var(--secondary-colour)] h-[5vh] justify-between px-[5%] text-[var(--primary-colour)]">
            
            <div className="flex justify-center items-center gap-[5%]  ">
                <img src={leftArrow} alt="back" className='h-6 w-6 ' onClick={navBack}/>
            </div>
            <img
                src={logoLight}
                alt="Logo Light"
                className="w-[5vh] h-[5vh] block dark:hidden"
                onClick={navHome}
            />
            <img
                src={logoDark}
                alt="Logo Dark"
                className="w-[5vh] h-[5vh] hidden dark:block"
                onClick={navHome}
            />
            {user ? <div className='userCard flex justify-center items-center gap-[5%]' onClick={navSettings}>
                <p className='text-[1.25rem]'>{user?.username}</p>
                {user?.pictureUrl ? (
                            <img
                                src={user?.pictureUrl}
                                alt="User Avatar"
                                className="relative inline-block h-12 w-12 rounded-full object-cover object-center bg-[var(--secondary-colour)]"
                            />
                            ) : (
                            <div
                                className="relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--primary-colour)] text-[var(--secondary-colour)] text-lg font-bold uppercase"
                            > 
                                {user?.username?.[0] ?? "?"}
                            </div>
                            )}
            </div> : <div className='text-[var(--primary-colour)]'>
                <p onClick={navRegister}>Register</p>
                <p onClick={navLogin}>Login</p>
            </div> }
            
            
        </div>
        
    )
}

export default Nav
