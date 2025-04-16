import React, { useState, useEffect, useContext } from 'react';
import { addPoints } from '../functions/fetches/addPoints';
import { mainContext } from '../context/MainProvider.jsx';
import { calculateAnswers } from '../functions/calculateAnswers';
import { getUserImage } from '../functions/fetches/userfetches';
const Guesses = ({ activeQuestion, winners, showWinners }) => {
    const [visibleAnswers, setVisibleAnswers] = useState([]);
    const [maxBarValue, setMaxBarValue] = useState(100);
    const{visibleCorrectAnswer, setVisibleCorrectAnswer} = useContext(mainContext)
    
    const handleShowAnswerClick = (index, targetValue) => {

        if (visibleAnswers[index]) return; 
        console.log(targetValue)
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
            
        };
        const step = calcStep();
        const interval = setInterval(() => {
            currentValue += step;
            
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            let oldAnswers = [...visibleAnswers]
            oldAnswers.push(currentValue)
            setVisibleAnswers(oldAnswers);
            
        }, 60);
    };
    useEffect(() => {
        const max = visibleAnswers.reduce((a, b) => Math.max(a, b), 1);
        if(visibleCorrectAnswer > max) {
            console.log(visibleCorrectAnswer)
            setMaxBarValue(visibleCorrectAnswer)
        }else(setMaxBarValue(max))
    },[visibleAnswers])
    return (
        <div className='flex justify-evenly'>
            {activeQuestion?.answers.map((answer, index)=>{ 
                const value = visibleAnswers[index] ?? 0;
                let percentage 
                if(maxBarValue <= value){
                    percentage = Math.min((value / answer.answer) * 100, 100)
                } else{
                    percentage = Math.min((value / maxBarValue) * 100, 100)
                }
                const correctPercentage =  Math.min((visibleCorrectAnswer / maxBarValue) * 100, 100)

                return(
                    <div key={index} className="answerBox text-[var(--secondary-colour)]">
                        <div className="flex h-full justify-center items-end">
                            
                            <div className=" bg-[var(--secondary-colour)] w-[2vh] h-[2vh] overflow-hidden text-[var(--primary-colour)]" style={{ height: `${percentage}%` }}></div>
                            <div className=" bg-[var(--secondary-colour-acsent)]  w-[2vh] h-[2vh]" style={{ height: `${correctPercentage}%` }}></div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='answer'>{visibleAnswers[index] !== undefined ? visibleAnswers[index] : null}</p>
                            <img src={answer?.userImg} alt="Italian Trulli" className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center bg-[var(--secondary-colour)]" onClick={() => handleShowAnswerClick(index, answer.answer)}/>
                            <p className="username">{answer?.username}</p> 

                            {showWinners && (() => {
                                
                            const winner = winners.find(w => w.userId === answer.userId);
                            return winner ? <p className=''>{winner.points} Punkte!</p> : null;
                        })()}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Guesses
