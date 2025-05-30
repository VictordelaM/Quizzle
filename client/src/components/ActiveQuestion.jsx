import React, { useContext } from "react";
import { mainContext } from "../context/MainProvider";


const ActiveQuestion = ({activeQuestion, index}) => {

    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)


    return (
        <div   className="flex flex-col justify-center gap-[5%] items-center w-[60%] h-fit bg-[var(--secondary-colour)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 pb-[5%] ">
            <div className="flex justify-between w-full p-[2.5%] ">
                <p className="text-sm text-center">{activeQuestion?.category}</p>
                <div className="">{index?.index + '/' + index?.length}</div>
            </div>
            
            <p className="text-[2rem]">{activeQuestion?.questionText}</p>
            {visibleCorrectAnswer>0&& <div className="relative top-5 rounded-2xl shadow-lg p-[2.5%] flex flex-col items-center bg-[var(--primary-colour)] text-[var(--secondary-colour)]">
                <p className="">Korrekte Antwort:</p>
                <p>{visibleCorrectAnswer}</p>
            </div>}
        </div>
    )
}

export default ActiveQuestion
