import React from 'react'
import { addQuiz } from '../functions/fetches/sessionFetches'

const addQuizForm = () => {
    const createQuiz = async (event) =>{
        event.preventDefault()
        addQuiz(event.target.title.value)
    }
  return (

    <div>
        <form onSubmit={createQuiz}>
            <label htmlFor="title">titel</label>
            <input type="text" name="title" id="title" />
            <button>submit</button>
        </form>
    </div>
  )
}

export default addQuizForm
