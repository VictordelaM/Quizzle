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
        <div className=''>
            <Nav/>
            <div className="content">
                <h3>Die Quizzes</h3>
                {
                    quizzes?.map((quiz, index)=>{
                        return <SelectQuizCard key={index} quiz={quiz} />
                    })
                }
            </div>

        </div>
    )
}

export default SelectQuiz
