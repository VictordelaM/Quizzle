import React, { useEffect, useState } from 'react'
import { getUser } from '../functions/fetches/userfetches'
import LoginPage from './LoginPage'
import { getEveryQuiz } from '../functions/fetches/getEveryQuiz'
import AddImg from '../components/AddImg'
import { useNavigate } from "react-router-dom"
import Nav from '../components/Nav'


const Index = () => {
    const [user, setUser] = useState(false)
    const [everyQuiz, setEveryQuiz] = useState(false)
    let navigate = useNavigate();


    useEffect(()=>{
        const getUserData = async() =>{
            const userData = await getUser()
            if(JSON.stringify(userData) != "{error: 'Internal server error'}"){
                setUser(userData)
            }
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
    
    if(!user){
        navigate('/login')
    }
    if(!user?.pictureUrl)return <AddImg/>
    const nav = () =>{
        navigate('/selectQuiz')
    }
    return (
        <div>
            <Nav/>
            <div>
            <button onClick={nav}>select your Quiz</button>
            </div>
        </div>
    )
}

export default Index
