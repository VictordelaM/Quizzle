import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { addPoints, getUsers } from '../../functions/fetches/userfetches'

const Solution = () => {
    const {activQuestion,users} = useContext(mainContext)
    const [answers, setAnswers] = useState([])
    
    const solut =()=>{
        let arr = []
        users.map((user)=>{
            const input = user.answers.find((element) => element.questionID == activQuestion._id).answer
            let distance = input - activQuestion.answer 
            if (distance < 0){
                distance = distance*(-1)
            }
            const answer ={
                answer: input,
                user: user.username,
                distance: distance 
            } 
            arr.push(answer)
        })
        arr.sort((a, b) => b.distance - a.distance)
        arr.map((answer,i)=>{
            i++
            console.log(i)
            addPoints(i, answer.user)
        })
        setAnswers(arr)
        
    }
    console.log(answers)
    return (
        <div>
            <button onClick={solut}>sol</button>
            <div>
                {answers && answers.map((answer, index)=>{
                    return<div key={index}>
                            <p class= 'answer'>{answer.distance}</p>
                            <p class= 'user' >{answer.user}</p>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Solution
