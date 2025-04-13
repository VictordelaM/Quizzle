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
    const refresh  = async()=>{
        location.reload()
        // joinSession(quizId, sessionId)
    }
    useEffect(()=>{

    },[])
    return (
        <div className='flex flex-col'>
            <form onSubmit={upload} className='flex flex-col items-center justify-center'>
                <div className='flex flex-col  items-center justify-center'>
                    <label htmlFor="pictur" >Lade hier dein Profilbild hoch</label>
                    <input id="picture" name="picture" type="file" className='w-[80%]'/>
                </div>

                <button onClick={refresh} className='border w-[30%]'>upload</button>
            </form>
        </div>
    )
}

export default AddImg
