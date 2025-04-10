import React, { useState, useEffect, useContext } from 'react';
import './Guesses.css'
import { addPoints } from '../functions/fetches/addPoints';
import { mainContext } from '../context/MainProvider.jsx';
import { calculateAnswers } from '../functions/calculateAnswers';
import { getUserImage } from '../functions/fetches/userfetches';
const Guesses = ({ activeQuestion }) => {
    const [visibleAnswers, setVisibleAnswers] = useState({});
    const [maxBarValue, setMaxBarValue] = useState(100);
    const [showWinners, setShowWinners] = useState(false)
    const [winners, setWinners] = useState([])
    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)
    
    useEffect(()=>{
        const answers = activeQuestion?.answers.map((answer, index)=>{
            return answer.answer
        })
        const winners = calculateAnswers(activeQuestion?.answers, activeQuestion?.correctAnswer)
        setWinners(winners)
        // const bodyData= {
        //     answer: 213, 
        //     userId: 'fsdgsa3424erfw', 
        //     category: 'lümmel', 
        //     categoryId: 'adlfkjaösne33r',
        //     question: 'was ist ein ananana', 
        //     questionId: 'adsfasfasdfasafssd',
        //     points: 2
        // }
        // addPoints(bodyData)
        setMaxBarValue(Math.max(answers))
    },[])


    const handleShowWinners = () =>{
        setShowWinners(true)
    }


    const handleShowCorrectAnswerClick = (index, targetValue) => {

        let currentValue = 0;
        const calcStep = () => {
            if (targetValue <= 10) return 1;
            if (targetValue <= 100) return 3;
            if (targetValue <= 1000) return 45;
            if (targetValue <= 10000) return 103;
            if (targetValue <= 100000) return 5741;
            if (targetValue <= 1000000) return 94632;
            if (targetValue <= 10000000) return 654846;
            if (targetValue <= 100000000) return 9689731;
            return 94638791;
        };
        const step = calcStep();
        const interval = setInterval(() => {
            currentValue += step;
            if (currentValue >= maxBarValue) {
                setMaxBarValue(currentValue)
            }
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            setVisibleCorrectAnswer(currentValue);
        }, 60); // wie schnell der Zähler läuft
    };
    const handleShowAnswerClick = (index, targetValue) => {
        if (visibleAnswers[index]) return; // falls schon gezeigt, abbrechen
        let currentValue = 0;
        const calcStep = () => {
            if (targetValue <= 10) return 1;
            if (targetValue <= 100) return 3;
            if (targetValue <= 1000) return 45;
            if (targetValue <= 10000) return 103;
            if (targetValue <= 100000) return 5741;
            if (targetValue <= 1000000) return 94632;
            if (targetValue <= 10000000) return 654846;
            if (targetValue <= 100000000) return 9689731;
            // return 94638791;
        };
        const step = calcStep();
        const interval = setInterval(() => {
            currentValue += step;
            
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            setVisibleAnswers(prev => ({
                ...prev,
                [index]: currentValue
            }));
        }, 60); // wie schnell der Zähler läuft
    };
    return (
        <div>
            {activeQuestion?.answers.map((answer, index)=>{ 
                const value = visibleAnswers[index] ?? 0;
                const percentage = Math.min((value / maxBarValue) * 100, 100)       //for userAnswer
                const correctPercentage =  Math.min((visibleCorrectAnswer / maxBarValue) * 100, 100)
                return(
                    <div key={index} className="answerBox">
                        <div className="answerBar" style={{ width: `${percentage}%` }}></div>
                        <div className="correctAnswerBar" style={{ width: `${correctPercentage}%` }}></div>
                        <div className='answerContainer'>
                            <p className="username">{answer?.username}</p>
                            <p className='answer'>{visibleAnswers[index] !== undefined ? visibleAnswers[index] : null}</p>
                        </div>
                        <div className="avatar">
                            {showWinners && (() => {
                            const winner = winners.find(w => w.userId === answer.userId);
                            return winner ? <p>{winner.points}</p> : null;
                        })()}

                            <img src={answer?.userImg} alt="Italian Trulli"/> 
                        </div>
                        <button onClick={() => handleShowAnswerClick(index, answer.answer)}>show answer</button>
                        <button onClick={() => handleShowCorrectAnswerClick(index, activeQuestion?.correctAnswer)}>show corrext answer</button>
                        <button onClick={() => handleShowWinners(index, activeQuestion?.correctAnswer)}>show winners</button>

                    </div>
                )
            })}
        </div>
    );
};

export default Guesses
