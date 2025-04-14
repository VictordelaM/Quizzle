import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectQuizCard = ({quiz}) => {
    const navigate = useNavigate()
    const nav = ()=>{
        navigate('/quiz/'+quiz?.quizId)
    }
    return (
        <div onClick={nav} className='border w-fit p-[2.5%] text-[var(--secondary-colour)]  text-[1.5rem]'>
            <p>{quiz?.title}</p>
        </div>
    )
}

export default SelectQuizCard
