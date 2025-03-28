import React, { useContext } from 'react'
import { addAnswer, getUsers } from '../../functions/fetches/userfetches'
import { mainContext } from '../../context/mainProvider'

const Guesses = () => {
    const {users, setUsers, activQuestion} = useContext(mainContext)
    const userList = async(setUsers)=>{
        const resp = await getUsers()
        setUsers(await resp)
        return resp
    }
    const show =(event) => {
        event.preventDefault()
        users.map((user)=>{
            const answer = event.target['input' + user.username].value;
        addAnswer(answer, activQuestion,user.username)
        })
    }
    if(users==false){
        userList(setUsers)
    }
    return (
    <div>
        <form onSubmit={show}>
        {users && users.map((user, index) => (
        <div key={index}>
        <label >{user.username}</label>
        <input type="number" name={'input'+user.username} id={'input'+user.username} />
        </div>
      ))}
        <button onSubmit={show}>sub</button>
        </form>
    </div>
  )
}

export default Guesses
