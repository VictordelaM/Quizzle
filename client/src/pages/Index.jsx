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
    

    const navQuizSelect = () =>{
        navigate('/selectQuiz')
    }
    const navFeedback = () =>{
        navigate('/feedback')
    }
    const navLogin = () =>{
        navigate('/login')
    }
    return (
        <div>
            <Nav/>
            <div className='flex flex-col items-center p-[5%] gap-[5%]  min-h-[95vh] text-center font-[var(--font-type)] bg-[var(--primary-colour)]'>
                <p className='text-[2rem] text-[var(--secondary-colour)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam deserunt placeat nostrum similique corporis omnis in tempora. Exercitationem repellat debitis doloremque. Accusantium vel porro expedita, at necessitatibus et deserunt minima exercitationem ab voluptate dolorum ipsam itaque quasi ut nihil, quibusdam tempore. Velit recusandae ratione doloremque vel ea earum!</p>
                {user?<button className='border text-[2rem] text-[var(--secondary-colour)] p-[1%]' onClick={navQuizSelect}>select your Quiz</button>:<p onClick={navLogin} className='text-[2rem] text-[var(--secondary-colour)] border border-[var(--secondary-colour)] p-[2.5%] m-[2.5%]'>Log dich ein um an einem Quiz Teilzunehmen</p>}
                <p className='text-[2rem] text-[var(--secondary-colour)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam deserunt placeat nostrum similique corporis omnis in tempora. Exercitationem repellat debitis doloremque. Accusantium vel porro expedita, at necessitatibus et deserunt minima exercitationem ab voluptate dolorum ipsam itaque quasi ut nihil, quibusdam tempore. Velit recusandae ratione doloremque vel ea earum!</p>
                <button className='border text-[2rem] text-[var(--secondary-colour)] p-[1%]' onClick={navFeedback}>leave Feedback</button>
            </div>
        </div>
    )
}

export default Index
