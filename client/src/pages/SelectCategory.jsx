import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import SelectCategoryCard from "../components/SelectCategoryCard";
import Nav from "../components/Nav";
import { getOpenCategories } from "../functions/fetches/openCategoriesFetches";

const SelectCategory = () => {
    const { quizId, sessionId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [openCategories, setOpenCategories] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            const resp = await fetchQuizData(quizId)
            setQuiz(resp)
        };
        fetchQuiz();
    }, [quizId]);

    useEffect(() => {
        const fetchOpenCategories = async () => {
            const resp = await getOpenCategories(quizId,sessionId)
            setOpenCategories(resp)
        };
        fetchOpenCategories();
    },[])


    if (!quiz) return <p className="loading">Lädt...</p>;
    
    return (
        <div>
            <Nav/>
            <div className="flex flex-col items-center  h-[90vh] ">
                <h1>{quiz.title}</h1>
                <div className="flex items-center flex-wrap h-[80%] w-[90%] gap-[15%]">
                    {openCategories?.map((category, catIndex) => (
                        <SelectCategoryCard key={catIndex} quiz={quiz} sessionId={sessionId} category={category}/>
                    ))}
                </div>
                
            </div>
            
        </div>
    );
};

export default SelectCategory;
