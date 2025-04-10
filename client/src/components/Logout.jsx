import React from 'react'

const Logout = () => {
    const handleLogout= () =>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Logout
