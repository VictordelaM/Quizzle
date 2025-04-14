import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changeActiveQuestion } from "../functions/fetches/changeActivequestion";
import { deleteOpenCategory } from "../functions/fetches/openCategoriesFetches";

const First = ({categoryId, quiz, sessionId}) => {
    const navigate = useNavigate()

    const deleteCat = () => {

    }





    const setFirstQuestion = () =>{
        const category = quiz?.categories?.find(cat => cat.categoryId === categoryId);
        const firstQuestion = {
            answers: [],
            correctAnswer: category?.questions[0]?.correctAnswer,
            imgLinks: category?.questions[0]?.imgLinks,
            options: category?.questions[0]?.options,
            questionId: category?.questions[0]?.questionId,
            questionText: category?.questions[0]?.questionText,
            category: category?.categoryName,
            categoryId: category?.categoryId
        }
        changeActiveQuestion(quiz?.quizId, sessionId, firstQuestion)
        deleteOpenCategory(quiz.quizId, sessionId, categoryId)
        navigate('/question/'+quiz?.quizId+'/'+sessionId)
    }
    return (
        <div>
            <button className="text-[var(--primary-colour)]" onClick={setFirstQuestion}>lets go</button>
        </div>
    )
}

export default First
