import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'

const ScoreBoard = () => {
  const {users} = useContext(mainContext)
  return (
    <div>
      {
        users.map((user, index)=>{
          return <div className='Auswertung' key= {index}>
            {console.log('user')}
            <p>{user.username}</p>
            <p>{user.points}</p>
          </div>
        })
      }
    </div>
  )
}

export default ScoreBoard
