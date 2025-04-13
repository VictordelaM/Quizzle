import React from 'react'
import UserSettingForm from '../components/UserSettingForm'
import Nav from '../components/Nav'

const UserSettingPage = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center h-[90vh] '>
                <UserSettingForm/>
                
            </div>
        </div>
    )
}

export default UserSettingPage
