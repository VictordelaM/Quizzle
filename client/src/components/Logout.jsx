import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const handleLogout= () =>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/')
    }
    return (
            <button onClick={handleLogout} className='border w-fit px-[5%] mb-[2.5%]'>logout</button>
    )
}

export default Logout
