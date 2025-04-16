import React, { useState } from 'react'
import { addQuiz } from '../functions/fetches/sessionFetches'
import { useNavigate } from 'react-router-dom'
import { addCompleteQuiz } from '../functions/fetches/addCompleteQuiz'
import Nav from '../components/Nav'

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
    return (
        <div>
            <Nav/>
            <div className='flex flex-col text-center justify-center items-center gap-[5vh] min-h-[95vh]  bg-[var(--secondary-colour)] mt-[5%]'>
                {quiz.length === 0 ?<form onSubmit={addQuizHook} className='bg-[var(--primary-colour)] text-[var(--secondary-colour)] p-[2.5%] flex flex-col gap-[1vh] items-center'>
                    <label htmlFor="title">Wähle einen Titel für dein Quiz</label>
                    <input type="text" name='title' className='border border-[var(--secondary-colour)]'/>
                    <button className='border border-[var(--secondary-colour)] w-fit p-[2%]'>Submit</button>
                </form> :null}
                
                {quiz.map((q, index)=>{
                    return <div key={index}  className='bg-[var(--primary-colour)] text-[var(--secondary-colour)] p-[2.5%] flex flex-col gap-[2.5%]'>
                        <h3 className='pb-[5%]'>Quiztitel: {q?.title}</h3>
                        <form onSubmit={addCategoryHook} className='mb-[2.5%] gap-[2.5%] flex'>
                            <label htmlFor="categoryName">Kategoriename: </label>
                            <input type="text" name='categoryName' default='Kategoriename' className='border border-[var(--secondary-colour)] text-[var(--secondary-colour)]'/>
                            <button className='border border-[var(--secondary-colour)]'>Kategorie erstellen</button>
                        </form>
                        {
                            q?.categories?.map((category, index)=>{
                                return <div key={index} className='bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-[1.25%] flex flex-col gap-[2.5%] mb-[2.5%]'>
                                    <h3>Kategorie Name: {category?.categoryName}</h3>
                                    {category?.questions.length > 0 ? category?.questions.map((question, index)=>{
                                        return <div key={index} className='flex justify-between p-[2.5%] text-[var(--primary-colour)]'>
                                            <p>Frage: {question?.questionText}</p>
                                            <p>Antwort: {question?.correctAnswer}</p>
                                        </div>
                                    }) : null}
                                    <form onSubmit={()=>addQuestHook(event, index)} className='flex flex-col gap-[1vh]'>
                                        <div className="flex">
                                            <label htmlFor="questionText" className='w-[20%]'>Frage</label>
                                            <textarea name="questionText" className='w-[70%] border border-[var(--primary-colour)]'/>
                                        </div>
                                        <div className="flex ">
                                            <label htmlFor="correctAnswer" className='w-[20%]'>Antwort</label>
                                            <input type="text" name="correctAnswer" className='w-[70%] border border-[var(--primary-colour)]'/>
                                        </div>
                                        <button className='w-[80%] border border-[var(--primary-colour)] self-center'>Frage hinzufügen</button>
                                    </form>
                                </div>
                            })
                        }
                    </div>
                })}
                <button className='text-[var(--primary-colour)] border border-[var(--primary-colour)] p-[2.5%] mb-[10vh]' onClick={async()=>{
                    const data = await addCompleteQuiz(quiz[0])
                    console.log(data)
                    navigate('/selectQuiz')
                }}>Quiz speichern</button>
            </div>
        </div>
    )
}

export default AddQuiz
