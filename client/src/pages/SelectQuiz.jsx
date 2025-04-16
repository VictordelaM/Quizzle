import React, { useEffect, useState } from 'react'
import SelectQuizCard from '../components/SelectQuizCard'
import { getEveryQuiz } from '../functions/fetches/getEveryQuiz'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

const SelectQuiz = () => {
    const [quizzes, setQuizzes] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const getQuizzes = async()=>{
            const data = await getEveryQuiz()
            setQuizzes(data)
        }
        getQuizzes()
        
    },[])
    const navAddQuiz = ()=>{
        navigate('/addQuiz')
    }
    return (
        <div className=''>
            <Nav/>
            <div className="flex flex-col text-center items-center p-[10%] gap-[5%] h-[95vh]  bg-[var(--primary-colour)]">
                <h3 className=' text-[var(--secondary-colour)] mb-[2.5%] text-[2rem]'>Verfügbare Quizzes:</h3>
                {
                    quizzes?.map((quiz, index)=>{
                        return <SelectQuizCard key={index} quiz={quiz} />
                    })
                }
                <div className=' text-[var(--secondary-colour)] mb-[2.5%] text-[2rem] border w-fit p-[2.5%] text-[var(--secondary-colour)]  text-[1.5rem]' onClick={navAddQuiz}>add Quiz</div>
            </div>

        </div>
    )
}

export default SelectQuiz
