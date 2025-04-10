import React, { useEffect, useState } from 'react'
import SelectQuizCard from '../components/SelectQuizCard'
import { getEveryQuiz } from '../functions/fetches/getEveryQuiz'

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
            {
                quizzes?.map((quiz, index)=>{
                    return <SelectQuizCard key={index} quiz={quiz}/>
                })
            }
        </div>
    )
}

export default SelectQuiz
