import React , { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

export const MainProvider = ({children}) => {
    const [scorePlayer1, setScorePlayer1] = useState(0)
    const [scorePlayer2, setScorePlayer2] = useState(0)
    const [scorePlayer3, setScorePlayer3] = useState(0)
    const [scorePlayer4, setScorePlayer4] = useState(0)
    const [scorePlayer5, setScorePlayer5] = useState(0)
    const [scorePlayer6, setScorePlayer6] = useState(0)
    const [scorePlayer7, setScorePlayer7] = useState(0)
    const [scorePlayer8, setScorePlayer8] = useState(0)

  return (
    <div>
          <>
            <mainContext.Provider
                value={{scorePlayer1,setScorePlayer1, scorePlayer2,setScorePlayer2,scorePlayer3,setScorePlayer3,scorePlayer4,setScorePlayer4,scorePlayer5,setScorePlayer5,scorePlayer6,setScorePlayer6,scorePlayer7,setScorePlayer7,scorePlayer8,setScorePlayer8 }}
            >
                {children}
            </mainContext.Provider>
        </>
    </div>
  )
}

// export default MainProvider

