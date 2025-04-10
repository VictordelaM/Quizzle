import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'
import LoginPage from './LoginPage'
import { getEveryQuiz } from '../functions/fetches/getEveryQuiz'
import AddImg from '../components/AddImg'

const Index = () => {
    const [user, setUser] = useState(false)
    const [everyQuiz, setEveryQuiz] = useState(false)
    useEffect(()=>{
        const getUserData = async() =>{
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    },[])
    
    useEffect(()=>{
        const getQuizData = async() =>{
            const quizData = await getEveryQuiz()
            setEveryQuiz(quizData)
        }

        getQuizData()
    },[])
    if(!user)return <LoginPage/>
    return (
        <div>
            <AddImg/>
        </div>
    )
}

export default Index
