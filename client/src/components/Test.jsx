import React from 'react'
import UserSettingForm from './UserSettingForm'
import Nav from './Nav'

const Test = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center justify-center h-[90vh] '>
                <UserSettingForm/>
                
            </div>
        </div>
    )
}

export default Test
