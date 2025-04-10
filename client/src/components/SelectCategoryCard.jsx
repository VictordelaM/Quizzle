import React from "react";
import First from "./First";

const SelectCategoryCard = ({quiz, sessionId, category}) => {


    return (
        <div className="categoryContainer">
                <div className="categoryBox">
                    <p className="categoryName">{category.categoryName} </p>
                    <First categoryId= {category.categoryId} sessionId= {sessionId} quiz={quiz}/>
                </div>
        </div>  
    )
}

export default SelectCategoryCard
