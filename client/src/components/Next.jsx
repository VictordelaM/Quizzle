import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchQuizData } from "../functions/fetches/getQuizData";
import { getActiveQuestion } from "../functions/getActivQuestion";
import { changeActiveQuestion } from "../functions/fetches/changeActivequestion";

const Next = ({activeQuestion, index}) => {

    const [quiz, setQuiz] = useState(null)
    const { quizId, sessionId } = useParams();
    const navigate = useNavigate()

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
        const category = quiz?.categories?.find(cat => cat.categoryId === activeQuestion?.categoryId);

        if (!category) return 'kategorie nicht gefunden'; // Falls Kategorie nicht existiert
        // 2️⃣ Frage-Index in der Kategorie finden
        const questionIndex = category?.questions?.findIndex(q => q.questionId === activeQuestion?.questionId
        );
        console.log(questionIndex)
        if(index?.index >= index?.length){
            navigate('/scoreboard/quiz/'+quizId+'/session/'+ sessionId)
            return
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
