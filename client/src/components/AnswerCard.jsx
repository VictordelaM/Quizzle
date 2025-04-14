import React, { useContext, useEffect , useState} from 'react'
import { setAnswer } from '../functions/fetches/setAnswer.js';
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
    location.reload()
  }


  if (!activeQuestion) return <div className='loading'>Lädt...</div>;

  return (
    <div className=" flex w-full fixed justify-center items-center h-[95vh] text-center bg-[var(--primary-colour)]">
      <div className='flex flex-col justify-center items-center h-fit w-[80%] p-[5%] bg-[var(--secondary-colour)] text-[var(--primary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300' >
        <p>{index?.index+'/'+index?.length}</p>
        <p className='mb-[2.5%]'>{activeQuestion?.questionText}</p>
        {!answered && (
          <form className='form flex flex-col items-center gap-[1vh]' onSubmit={setUserAnswer}>
            <input type="number" name="answerInput" id="answerInput" className='border border-[var(--primary-colour)]'/>
            <button className='border border-[var(--primary-colour)] p-[2.5%]'>Antworten</button>
          </form>
        )}
        {answered && <p className='answered'>Antwort <span className=' p-[5%] questionContainer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>{aw}</span> gespeichert!</p>}
      </div>
    </div>
  )
}

export default AnswerCard
