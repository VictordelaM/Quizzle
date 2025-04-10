import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import SelectCategoryCard from "../components/SelectCategoryCard";
import Nav from "../components/Nav";

const SelectCategory = () => {
    const { quizId, sessionId } = useParams();
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            const resp = await fetchQuizData(quizId)
            setQuiz(resp)
        };
        fetchQuiz();
    }, [quizId]);
    if (!quiz) return <p className="loading">Lädt...</p>;
    
    return (
        <div>
            <Nav/>
            <h1>{quiz.title}</h1>
            {quiz.categories.map((category, catIndex) => (
                <SelectCategoryCard key={catIndex} quiz={quiz} sessionId={sessionId} category={category}/>
            ))}
        </div>
    );
};

export default SelectCategory;
