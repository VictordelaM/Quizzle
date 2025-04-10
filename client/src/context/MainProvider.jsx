import React , { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

export const MainProvider = ({children}) => {
    // const [questions, setQuestions] = useState([])
    // const [activQuestion, setActiveQuestion] = useState()
    // const [users, setUsers] = useState([])
    // const [quiz, setQuiz] = useState()
    const [visibleCorrectAnswer, setVisibleCorrectAnswer] = useState(0);
  return (
    <div>
          <>
            <mainContext.Provider
                value={{visibleCorrectAnswer, setVisibleCorrectAnswer}}
            >
                {children}
            </mainContext.Provider>
        </>
    </div>
  )
}

// export default MainProvider

