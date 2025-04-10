import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'

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
                <div className="navArrow">
                    {/* <svg></svg> */}
                </div>
                <div className="home">
                    {/* <svg></svg> */}
                </div>
            </div>
            <div className='userCard'>
                <p>{user?.username}</p>
                <img className='avatar' src={user?.pictureUrl} alt="no img" />       
            </div>
        </div>
        
    )
}

export default Nav
