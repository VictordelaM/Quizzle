import React, { useEffect, useState } from 'react'
import { uploadImg } from '../functions/fetches/userfetches'
import { joinSession } from '../functions/fetches/sessionFetches'
import { useNavigate } from "react-router-dom"

const AddImg = () => {
    let navigate = useNavigate();
    const [fileSelected, setFileSelected] = useState(false)

    const handleFileChange = (e) => {
      setFileSelected(e.target.files.length > 0)
    }
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
        <div className="flex flex-col items-center justify-center text-[var(--primary-colour)] bg-[var(--secondary-colour)] p-6 rounded-lg">
        <form onSubmit={upload} className="flex flex-col items-center justify-center space-y-6 w-full">
            <div className="flex flex-col items-center justify-center space-y-2 w-full">
                <label htmlFor="picture" className="font-semibold">Lade hier dein neues Profilbild hoch</label>
    
                <div className="relative w-fit">
                    <input
                        id="picture"
                        name="picture"
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 z-10 cursor-pointer"
                    />
                    <label
                        htmlFor="picture"
                        className="border border-[var(--primary-colour)] px-4 py-2 rounded cursor-pointer bg-[var(--secondary-colour)] text-[var(--primary-colour)] hover:opacity-80 transition"
                    >
                        Datei wählen
                    </label>
                </div>
    
                {fileSelected && <span className="text-2xl mt-2">☑️</span>}
            </div>
    
            <button
                onClick={refresh}
                className="border border-[var(--primary-colour)] px-4 py-2 rounded w-fit bg-[var(--secondary-colour)] text-[var(--primary-colour)] hover:opacity-90 transition"
            >
                Upload
            </button>
        </form>
    </div>
    
    )
}

export default AddImg
