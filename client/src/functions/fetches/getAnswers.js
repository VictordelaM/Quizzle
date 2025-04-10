// import { useContext } from "react";
// import { mainContext } from "../../context/mainProvider";

// export const getAnswers = (quizId)=>{
//     const {setQuiz} = useContext(mainContext)
//     const answerFetch = async(quizId)=>{
//         try{
//             const url = import.meta.env.VITE_BACKEND_URL+'/session/getQuizByID/'+ quizId
//             const response = await fetch(url,{
//                 method: 'GET'
//             })
//             const data = await response.json();
//             setQuiz(data)
//             return data
//         } catch(error){
    
//         }
//     }
//     return { getAnswers }
// }