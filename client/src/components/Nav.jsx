import React, { useEffect, useState } from 'react'
import { getUserByUsername } from '../functions/fetches/userfetches'

const Nav = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const getUser = async()=>{
            const data = await getUserByUsername()
            setUser(data)
        }
        getUser()
    },[])
    return (
        <div className='userCard'>
            <p>{user?.username}</p>
            <p>{user?.points}</p>
            <img className='avatar' src="" alt="" />       
        </div>
    )
}

export default Nav
