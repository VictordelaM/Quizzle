import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import { getActiveQuestion } from "../functions/getActivQuestion";
import { changeActiveQuestion } from "../functions/fetches/changeActivequestion";

const Next = ({activeQuestion}) => {

    const [quiz, setQuiz] = useState(null)
    const { quizId, sessionId } = useParams();
                                                                    //!quiz aus parent
        useEffect(() => {
            const actQue = async() =>{
                const quiz =await fetchQuizData(quizId)
                setQuiz(quiz)
            }
            actQue()

        }, []);

    const setNextQuestionId = (quiz, activeQuestion) => {
        // 1️⃣ Kategorie finden
        const testCatId = 'a9f1bc8f-5f68-48fc-8071-5c91a4c1da8d'
        const category = quiz?.categories?.find(cat => cat.categoryId === activeQuestion?.categoryId);

        if (!category) return 'kategorie nicht gefunden'; // Falls Kategorie nicht existiert
        // 2️⃣ Frage-Index in der Kategorie finden
        const questionIndex = category?.questions?.findIndex(q => q.questionId === activeQuestion?.questionId
        );
        console.log('category:', category?.questions?.length)
        // 3️⃣ Prüfen, ob eine nächste Frage existiert
        if (questionIndex === -1 ) {
            return 'frage nicht gefunden'; // Falls die aktuelle Frage nicht gefunden wurde oder es keine nächste gibt
        }
        if (questionIndex ===category?.questions?.length-1 ) {
            return 'das war die letzte Frage'; 
        }
    
        // 4️⃣ ID der nächsten Frage als neue Frage Setzen
        const nextOnlyQuestion = category?.questions[questionIndex + 1]
        console.log('nextOnlyQuestion:', category?.questions[questionIndex])
        const nextQuestion = {
            answers: nextOnlyQuestion.answers,
            correctAnswer: nextOnlyQuestion.correctAnswer,
            imgLinks: nextOnlyQuestion.imgLinks,
            options: nextOnlyQuestion.options,
            questionId: nextOnlyQuestion.questionId,
            questionText: nextOnlyQuestion.questionText,
            category: category.category,
            categoryId: category.categoryId
        }

        console.log('nextQuestion:', nextQuestion)

        changeActiveQuestion(quizId, sessionId, nextQuestion)
        location.reload()
    };
    return (
        <div>
            <button onClick={() => setNextQuestionId(quiz, activeQuestion)}>nächste Frage</button>
        </div>
    )
}

export default Next
