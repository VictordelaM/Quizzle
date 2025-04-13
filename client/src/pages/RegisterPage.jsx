import React from 'react'
import RegisterForm from '../components/RegisterForm.jsx'
import Nav from '../components/Nav.jsx'
const RegisterPage = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center h-[90vh] justify-center '>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterPage
