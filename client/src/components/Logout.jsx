import React from 'react'

const Logout = () => {
    const handleLogout= () =>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    return (
            <button onClick={handleLogout} className='border w-fit px-[5%]'>logout</button>
    )
}

export default Logout
