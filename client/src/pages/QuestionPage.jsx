import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActiveQuestion } from "../functions/getActivQuestion";
import ActiveQuestion from "../components/ActiveQuestion";
import Next from "../components/Next";
import First from "../components/First";
import Guesses from "../components/Guesses";
import { fetchQuizData } from "../functions/fetches/getQuizData";

const QuestionPage = () => {

    const { quizId, sessionId } = useParams();
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
        const actQue = async() =>{
            const actQuestResp = await getActiveQuestion(quizId, sessionId)
            const quizResp =await fetchQuizData(quizId)
            setQuiz(quizResp)
            setActiveQuestion(actQuestResp)
        }
        actQue()
        const interval = setInterval(actQue, 2000); // alle 2 Sekunden

        return () => clearInterval(interval);
    }, []);

    if (!activeQuestion || !quiz) return <p className="loading">Frage lädt...</p>;

    return (
        <div>
            <ActiveQuestion activeQuestion={activeQuestion}/>
            {quiz && <Next quiz={quiz} activeQuestion={activeQuestion} sessionId={sessionId}/>}
            <Guesses activeQuestion={activeQuestion}/>
        </div>
    );
};

export default QuestionPage;
