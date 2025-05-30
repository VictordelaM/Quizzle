import React from 'react'
import AddImg from './AddImg'
import Logout from './Logout'

const UserSettingForm = () => {
    return (
        <div className="flex flex-col justify-center gap-[5%] items-center w-fit p-[5%] h-fit bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <AddImg/>
            <Logout/>
        </div>
    )
}

export default UserSettingForm
