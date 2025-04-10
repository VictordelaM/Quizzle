import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import RegisterForm from '../components/RegisterForm.jsx'
import Nav from '../components/Nav.jsx'
const LoginPage = () => {
  return (
    <div>
      <Nav/>
      <LoginForm/>
      <RegisterForm/>
    </div>
  )
}

export default LoginPage
