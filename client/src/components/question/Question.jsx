import React, { useContext, useState } from 'react'
import { addAnswer, addPoints, addUser, getUsers } from '../../functions/fetches/userfetches.js'
import { getQuestions } from '../../functions/fetches/questionfetches.js'
import { mainContext } from '../../context/mainProvider.jsx'

const Question = () => {   
    
    // const [users, setUsers] = useState([1,3])
    const {questions,setQuestions,activQuestion,setActiveQuestion,users,setUsers} = useContext(mainContext)
    const random = (questions) =>{
        let choice = Math.round(Math.random()*questions.length)
        if (choice === questions.length){
            choice = questions.length-1}
        console.log('choice:',questions[choice])
        const list = questions
        console.log('listBefore:', list)
        list.splice(choice, 1)
        console.log('listAfter:', list)
        setQuestions(list)
        return questions[choice]

    }
    const getData = async () => {
        const response = await getQuestions()
        setQuestions(response)
    }
    const log = () =>{
        setActiveQuestion(random(questions))
    }
    const log2 = () =>{
        console.log(activQuestion.question)
        
    }
    if (!questions[1]){
        console.log('if')
        getData()
        setActiveQuestion(random(questions))
    }
    
    console.log(activQuestion)
return (
    <>
    <div>
        <div id="question">
            {/* <p>{activQuestion.question}</p> */}
        </div>
    </div>
    <button onClick={getData}>set up questions</button>
    <button onClick={log}>choose</button>
    <button onClick={log2}>show</button>
    </>
    )
}

export default Question
