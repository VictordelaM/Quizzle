import React, { useContext, useEffect } from 'react'
import AddQuizForm from '../components/AddQuizForm.jsx'
import AddQuestionForm from '../components//AddQuestionForm.jsx'
import AddCategoryForm from '../components/AddCategoryForm.jsx'
import { mainContext } from '../context/mainProvider.jsx'
import {fetchQuizData} from '../functions/fetches/getQuizData.js'
import RegisterForm from '../components/RegisterForm.jsx'

const DevInput = () => {
  const {quiz,setQuiz} = useContext(mainContext)
  useEffect(() => {
    fetchQuizData('5c4967a6-438c-42ff-a59a-3a3d10bc4911').then((data) => {
        if (data) {
          setQuiz(data);
        }
    });
}, []);
  const show = () =>{
    console.log(quiz)
  }

  return (
    <div>
      <AddQuizForm/>
      <AddQuestionForm/>
      <AddCategoryForm/>
      <RegisterForm/>
      <button onClick={show}>show</button>
    </div>
  )
}

export default DevInput
