import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import Nav from '../components/Nav.jsx'
const LoginPage = () => {
  return (
    <div>
      <Nav/>
      <div className='flex items-center h-[95vh] justify-center  bg-[var(--primary-colour)]'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
