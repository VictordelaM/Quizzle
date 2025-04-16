import First from "./First";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changeActiveQuestion } from "../functions/fetches/changeActivequestion";
import { deleteOpenCategory } from "../functions/fetches/openCategoriesFetches";

const SelectCategoryCard = ({quiz, sessionId, category}) => {
    console.log(category)
    const setFirstQuestion = () =>{
        // const category = quiz?.categories?.find(cat => cate.categoryId === cat.categoryId);
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
        <div onClick={setFirstQuestion} className="flex flex-col text-center bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-[2.5%] rounded-[10px] shadow-lg shadow-black">
                <div className="categoryBox">
                    <p className="categoryName">{category.category} </p>
                    {/* <First categoryId= {category.categoryId} sessionId= {sessionId} quiz={quiz}/> */}
                </div>
        </div>  
    )
}

export default SelectCategoryCard
