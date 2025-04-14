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
        <div className="navBox flex bg-[var(--primary-colour)] h-[5vh] justify-between mb-55">
            
            <div className="navigation">
                <img src={leftArrow} alt="home" className='icon ' onClick={navBack}/>
                <img src={home} alt="home" className='icon' onClick={navHome}/>
            </div>
            <div className='userCard' onClick={navSettings}>
                <p className='userName'>{user?.username}</p>
                <img className='avatar' src={user?.pictureUrl} alt="no img"/>       
            </div>
        </div>
        
    )
}

export default Nav
