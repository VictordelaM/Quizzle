import React from "react";
import First from "./First";

const SelectCategoryCard = ({quiz, sessionId, category}) => {


    return (
        <div className="flex flex-col text-center bg-[var(--secondary-colour)] text-[var(--primary-colour)] p-[2.5%] rounded-[10px] shadow-lg shadow-black">
                <div className="categoryBox">
                    <p className="categoryName">{category.category} </p>
                    <First categoryId= {category.categoryId} sessionId= {sessionId} quiz={quiz}/>
                </div>
        </div>  
    )
}

export default SelectCategoryCard
