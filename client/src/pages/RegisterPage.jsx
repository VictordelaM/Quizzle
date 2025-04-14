import React from 'react'
import RegisterForm from '../components/RegisterForm.jsx'
import Nav from '../components/Nav.jsx'
const RegisterPage = () => {
    return (
        <div>
            <Nav/>
            <div className='flex items-center h-[95vh] justify-center  bg-[var(--primary-colour)]'>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterPage
