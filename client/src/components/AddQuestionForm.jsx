import React from 'react'
import { addQuestionFetch } from '../functions/fetches/sessionFetches'

const AddQuestionForm = () => {
    const addQuestion = async(event) =>{
      event.preventDefault()
      addQuestionFetch()
    }

  return (
    <div>
      <form onSubmit={addQuestion}>
        <label htmlFor="questionTextInput">question</label>
        <input type="text" name='questionTextInput' id='questionTextInput' />
        <label htmlFor="correctAnswerInput">correctAnswer</label>
        <input type="text" name='correctAnswerInput' id='correctAnswerInput' />
        <label htmlFor="quizIdInput">quizId</label>
        <input type="text" name='quizIdInput' id='quizIdInput' />
        <label htmlFor="categoryIdInput">categoryId</label>
        <input type="text" name='categoryIdInput' id='categoryIdInput' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default AddQuestionForm
