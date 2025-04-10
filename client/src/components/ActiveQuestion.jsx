import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import { getActiveQuestion } from "../functions/getActivQuestion";
import { calculateAnswers } from "../functions/calculateAnswers";
import { addPoints } from "../functions/fetches/addPoints";
import { mainContext } from "../context/MainProvider";


const ActiveQuestion = ({activeQuestion, index}) => {

    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)
    return (
<div className="questionContainer">
    <div className='empty'></div>
    <h3>{activeQuestion?.category}</h3>
    <div className="categoryIndex">{index?.index + '/' + index?.length}</div>
    <h2 className="question">{activeQuestion?.questionText}</h2>
    {visibleCorrectAnswer>0&& <p className="correctAnswer">{visibleCorrectAnswer}</p>}
</div>
    )
}

export default ActiveQuestion
