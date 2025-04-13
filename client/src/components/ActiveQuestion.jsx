import React, { useContext } from "react";
import { mainContext } from "../context/MainProvider";


const ActiveQuestion = ({activeQuestion, index}) => {

    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)


    return (
        <div  className='flex flex-col items-center gap-3 container'>
            <div className="flex justify-between w-full">
                <div className='empty'></div>
                <h3>{activeQuestion?.category}</h3>
                <div className="categoryIndex">{index?.index + '/' + index?.length}</div>
            </div>
            
            <h2 className="question">{activeQuestion?.questionText}</h2>
            {visibleCorrectAnswer>0&& <p className="relative top-5 answer">{visibleCorrectAnswer}</p>}
        </div>
    )
}

export default ActiveQuestion
