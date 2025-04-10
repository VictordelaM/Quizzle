import React, { useContext, useEffect , useState} from 'react'
import { setAnswer } from '../functions/fetches/setAnswer.js';
import './AnswerCard.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../functions/fetches/userfetches.js';


const AnswerCard = ({activeQuestion, index}) => {
  const { quizId, sessionId } = useParams();
  const [answered, setAnswered] = useState(false)
  const [aw, setAw] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    const getUserData = async( )=>{
      const userData = await getUser()
      setUser(userData)
    }
    getUserData()
  },[])

  useEffect(()=>{
    activeQuestion?.answers?.map((e) =>{
      if(user?.userId == e.userId)
      setAnswered(true)
      setAw(e.answer)
    })
  },[user])

  const setUserAnswer = async (event) =>{
    event.preventDefault()
    const resp =await setAnswer(quizId, sessionId, activeQuestion?.questionId, activeQuestion?.questionText, activeQuestion?.categoryId, activeQuestion?.category, event)
    setAw(resp)
    // if(index?.index >= index?.length){
    //   navigate('/scoreboard/quiz/'+quizId+'/session/'+ sessionId)
    // }
    // location.reload()
  }


  if (!activeQuestion) return <div className='loading'>Lädt...</div>;

  return (
    <div className='questionContainer'>
      <p>{index?.index+'/'+index?.length}</p>
      <p className='question'>{activeQuestion?.questionText}</p>
      {!answered && (
        <form className='form' onSubmit={setUserAnswer}>
          <input type="number" name="answerInput" id="answerInput" className='userInput'/>
          <button className='userInput userButton'>Antworten</button>
        </form>
      )}
      {answered && <p className='answered'>Antwort <span>{aw}</span> gespeichert!</p>}
    </div>
  )
}

export default AnswerCard
