import React, { useEffect, useState } from 'react'
import SelectQuizCard from '../components/SelectQuizCard'
import { getEveryQuiz } from '../functions/fetches/getEveryQuiz'
import Nav from '../components/Nav'

const SelectQuiz = () => {
    const [quizzes, setQuizzes] = useState([])

    useEffect(()=>{
        const getQuizzes = async()=>{
            const data = await getEveryQuiz()
            setQuizzes(data)
        }
        getQuizzes()
        
    },[])
    return (
        <div>
            <Nav/>
            {
                quizzes?.map((quiz, index)=>{
                    return <SelectQuizCard key={index} quiz={quiz}/>
                })
            }
        </div>
    )
}

export default SelectQuiz
