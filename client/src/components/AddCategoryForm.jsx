import React from 'react'
import { changeActiveQuestion } from '../functions/fetches/changeActivequestion'
import { addCategoryFetch } from '../functions/fetches/sessionFetches'

const AddCategoryForm = () => {
    const set = () =>{
        changeActiveQuestion('5c4967a6-438c-42ff-a59a-3a3d10bc4911','3','test')
    }
    const addCategory= async(event) =>{
        event.preventDefault()
        addCategoryFetch(event)
    }
    return (
        <div>
            <form onSubmit={addCategory}>
                <label htmlFor="addCategoryInput">kategorie</label>
                <input type="text" name="addCategoryInput" id="addCategoryInput" />
                <label htmlFor="quizIdInput">quizId</label>
                <input type="text" name="quizIdInput" id="quizIdInput" />
                <button>submit</button>
            </form>
            <button onClick={set}>set</button>
        </div>
    )
}

export default AddCategoryForm
