import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActiveQuestion } from "../functions/getActivQuestion";
import ActiveQuestion from "../components/ActiveQuestion";
import Next from "../components/Next";
import First from "../components/First";
import Guesses from "../components/Guesses";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import { getIndex } from "../functions/getIndex";
import Nav from "../components/Nav";
import Loupe from "../assets/loupe-search-svgrepo-com.svg"
import Crown from "../assets/crown-minimalistic-svgrepo-com.svg"


const QuestionPage = () => {

    const { quizId, sessionId } = useParams();
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [quiz, setQuiz] = useState(null)
    const [index, setIndex] = useState(null)

    useEffect(() => {
        const actQue = async() =>{
            const actQuestResp = await getActiveQuestion(quizId, sessionId)
            const quizResp = await fetchQuizData(quizId)
            setQuiz(quizResp)
            setActiveQuestion(actQuestResp)

        }
        actQue()
        const interval = setInterval(actQue, 2000); // alle 2 Sekunden
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        const getIndexData = async()=>{
            const indexData = await getIndex(quizId, sessionId)
            setIndex(indexData)
        }
        getIndexData()
    },[activeQuestion])


    if (!activeQuestion || !quiz) return <p className="loading">Frage lädt...</p>;

    return (
        <div className='page'>
            <Nav/>
            <div className="quizBox">
                <div className="modInput">
                    <img src={Loupe} alt="lösung" className="questionIcon"/>
                    <img src={Crown} alt="Punkte" className="questionIcon"/>
                </div>
                <ActiveQuestion activeQuestion={activeQuestion} index={index}/>
                {quiz && <Next quiz={quiz} activeQuestion={activeQuestion} sessionId={sessionId} index={index}/>}
            </div>

            <Guesses activeQuestion={activeQuestion}/>
        </div>
    );
};

export default QuestionPage;
