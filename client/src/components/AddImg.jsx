import React, { useEffect } from 'react'
import { uploadImg } from '../functions/fetches/userfetches'
import { joinSession } from '../functions/fetches/sessionFetches'
import { useNavigate } from "react-router-dom"

const AddImg = () => {
    let navigate = useNavigate();
    const upload=(event)=>{
        event.preventDefault()
        uploadImg(event.target.picture.files[0])
    }
    const test  = async()=>{
        navigate('/selectQuiz')
        // joinSession(quizId, sessionId)
    }
    useEffect(()=>{

    },[])
    return (
        <div>
            <form onSubmit={upload}>
                <input id="picture" name="picture" type="file" />
                <button>upload</button>
            </form>
            <button onClick={test}>test</button>
        </div>
    )
}

export default AddImg
