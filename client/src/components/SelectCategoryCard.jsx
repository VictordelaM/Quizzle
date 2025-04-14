import React from "react";
import First from "./First";

const SelectCategoryCard = ({quiz, sessionId, category}) => {


    return (
        <div className="flex flex-col text-center">
                <div className="categoryBox">
                    <p className="categoryName">{category.category} </p>
                    <First categoryId= {category.categoryId} sessionId= {sessionId} quiz={quiz}/>
                </div>
        </div>  
    )
}

export default SelectCategoryCard
