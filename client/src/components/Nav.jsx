import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'
import home from '../assets/home-svgrepo-com.svg'
import leftArrow from '../assets/arrow-sm-left-svgrepo-com.svg'
import './stylesheets/Nav.css'
const Nav = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const getUserData = async()=>{
            const data = await getUser()
            setUser(data)
        }
        getUserData()
    },[])

    return (
        <div className="navBox">
            <div className="navigation">
                <img src={leftArrow} alt="home" className='icon'/>
                <img src={home} alt="home" className='icon'/>
            </div>
            <div className='userCard'>
                <p className='userName'>{user?.username}</p>
                <img className='avatar' src={user?.pictureUrl} alt="no img" />       
            </div>
        </div>
        
    )
}

export default Nav
