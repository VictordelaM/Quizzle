import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActiveQuestion } from "../functions/getActivQuestion";
import ActiveQuestion from "../components/ActiveQuestion";
import Next from "../components/Next";
import Guesses from "../components/Guesses";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import { getIndex } from "../functions/getIndex";
import Nav from "../components/Nav";
import Loupe from "../assets/loupe-search-svgrepo-com.svg"
import { mainContext } from "../context/MainProvider";
import { calculateAnswers } from "../functions/calculateAnswers";


const QuestionPage = () => {
    const [maxBarValue, setMaxBarValue] = useState(100);
    
    const { quizId, sessionId } = useParams();
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [quiz, setQuiz] = useState(null)
    const [index, setIndex] = useState(null)
    const [winners, setWinners] = useState([])
    const [showWinners, setShowWinners] = useState(false)


    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)



    const handleShowCorrectAnswerClick = (index, targetValue) => {

        let currentValue = 0;
        const calcStep = () => {
            if (targetValue <= 10) return 1;
            if (targetValue <= 100) return 3;
            if (targetValue <= 1000) return 45;
            if (targetValue <= 10000) return 103;
            if (targetValue <= 100000) return 5741;
            if (targetValue <= 1000000) return 94632;
            if (targetValue <= 10000000) return 654846;
            if (targetValue <= 100000000) return 9689731;
            return 94638791;
        };
        const step = calcStep();
        const interval = setInterval(() => {
            currentValue += step;
            setVisibleCorrectAnswer(currentValue);
            if (currentValue >= maxBarValue) {
                setMaxBarValue(currentValue)
            }
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                setShowWinners(true)
                clearInterval(interval);
            }
            
        }, 60); 
    };

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



    useEffect(()=>{
        const answers = activeQuestion?.answers.map((answer, index)=>{
            return answer.answer
        })
        if(activeQuestion){
            const winners = calculateAnswers(activeQuestion?.answers, activeQuestion?.correctAnswer)
            setWinners(winners)
            setMaxBarValue(Math.max(answers))
        }
    },[activeQuestion])


    const handleShowWinners = () =>{
        setShowWinners(true)
    }



    if (!activeQuestion || !quiz) return <p className="loading">Frage lädt...</p>;

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Nav/>
            <div className="flex flex-col h-[95vh] bg-[var(--primary-colour)]">
                <div className="items-center text-[var(--primary-colour)] my-[7.5%]">
                    <div className="flex justify-center items-center gap-2.5">
                        <div className="modInput">
                            <img src={Loupe} alt="lösung" className="w-10" onClick={() => handleShowCorrectAnswerClick(index, activeQuestion?.correctAnswer)}/>
                            {/* <img src={Crown} alt="Punkte" className="w-10" onClick={() => handleShowWinners(index, activeQuestion?.correctAnswer)}/> */}
                        </div>
                        <ActiveQuestion activeQuestion={activeQuestion} index={index}/>
                        {quiz && <Next quiz={quiz} activeQuestion={activeQuestion} sessionId={sessionId} index={index} winners={winners}/>}
                    </div>
                </div>
                <Guesses activeQuestion={activeQuestion} winners={winners} showWinners={showWinners}/>
            </div>
        </div>
    );
};

export default QuestionPage;
