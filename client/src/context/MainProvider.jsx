import React , { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

export const MainProvider = ({children}) => {
    const [questions, setQuestions] = useState([])
    const [activQuestion, setActiveQuestion] = useState()
    const [users, setUsers] = useState([])
  return (
    <div>
          <>
            <mainContext.Provider
                value={{questions, setQuestions, activQuestion, setActiveQuestion, users, setUsers}}
            >
                {children}
            </mainContext.Provider>
        </>
    </div>
  )
}

// export default MainProvider

