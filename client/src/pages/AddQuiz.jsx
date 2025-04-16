import React, { useState } from 'react'
import { addQuiz } from '../functions/fetches/sessionFetches'
import { useNavigate } from 'react-router-dom'
import { addCompleteQuiz } from '../functions/fetches/addCompleteQuiz'

const AddQuiz = () => {
    const [quiz, setQuiz] = useState([])
    const navigate = useNavigate()
    const addQuizHook = async (event) => {
    event.preventDefault()
    const data = [...quiz]
    data.push({
        title:event.target.title.value,
        categories:[]
    })
    setQuiz(data)
    }
    const addCategoryHook = async (event) => {  
    event.preventDefault()
    const data = [...quiz]
    data[0].categories.push({
        categoryName:event.target.categoryName.value,
        questions:[]
    })
    setQuiz(data)
    event.target.categoryName.value = ''
    }
    const addQuestHook = async (event, index) => {
        event.preventDefault()
        const data = [...quiz]
        data[0].categories[index].questions.push({
            questionText:event.target.questionText.value,
            correctAnswer:event.target.correctAnswer.value
        })
        setQuiz(data)
        event.target.correctAnswer.value = ''
        event.target.questionText.value = ''
    }
    console.log(quiz)
    return (
        <div>
            {quiz.length === 0 ?<form onSubmit={addQuizHook}>
                <label htmlFor="title">Wähle einen Titel für dein Quiz</label>
                <input type="text" name='title' className='border'/>
                <button>Submit</button>
            </form> :null}
            
            {quiz.map((q, index)=>{
                return <div key={index}>
                    <h3>{q?.quizName}</h3>
                    <form onSubmit={addCategoryHook}>
                        <label htmlFor="categoryName">Kategorie</label>
                        <input type="text" name='categoryName' />
                        <button>Submit</button>
                    </form>
                    {
                        q?.categories?.map((category, index)=>{
                            return <div key={index}>
                                <h3>{category?.categoryName}</h3>
                                {category?.questions.length > 0 ? category?.questions.map((question, index)=>{
                                    return <div key={index}>
                                        <p>{question?.questionText}</p>
                                        <p>{question?.correctAnswer}</p>
                                    </div>
                                }) : null}
                                <form onSubmit={()=>addQuestHook(event, index)}>
                                    <label htmlFor="questionText">Frage</label>
                                    <input type="text" name="questionText" />
                                    <label htmlFor="correctAnswer">Antwort</label>
                                    <input type="text" name="correctAnswer" />
                                    <button>frage hinzufügen</button>
                                </form>
                            </div>
                        })
                    }
                </div>
            })}
            <button onClick={async()=>{
                const data = await addCompleteQuiz(quiz[0])
                console.log(data)
                // navigate('/selectQuiz')
            }}>Quiz speichern</button>
        </div>
    )
}

export default AddQuiz
