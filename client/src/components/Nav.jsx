import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'
import home from '../assets/home-svgrepo-com.svg'
import leftArrow from '../assets/arrow-sm-left-svgrepo-com.svg'
import './stylesheets/Nav.css'
import { useNavigate } from 'react-router-dom'
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

    return (
        <div className="navBox sticky flex bg-[var(--secondary-colour)] h-[5vh] justify-between p-[5%]">
            
            <div className="flex justify-center items-center gap-[5%]  ">
                <img src={leftArrow} alt="home" className='h-6 w-6 ' onClick={navBack}/>
                <img src={home} alt="home" className='h-6 w-6' onClick={navHome}/>
            </div>
            <div className='userCard flex justify-center items-center gap-[5%]' onClick={navSettings}>
                <p className='userName'>{user?.username}</p>
                <img className="relative inline-block h-6 w-6 !rounded-full  object-cover object-center " src={user?.pictureUrl} alt="no img"/>       
            </div>
        </div>
        
    )
}

export default Nav
