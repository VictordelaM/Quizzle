import React, { useState } from 'react'
import UserSettingForm from './UserSettingForm'
import Nav from './Nav'
import Modal from './Modal'

const Test = () => {
    const [popUp, setPopUp] = useState(false)
    return (
        <div className='p-20'>
        <button className='outline outline-1 px-3 py-2 hover:bg-black hover:text-white'
        onClick={() => setPopUp(true)}
        >Open Modal</button>
        {popUp && <Modal setPopUp={setPopUp} />}
      </div>
    )
}

export default Test
