import React from 'react'

const Modal = ({setPopUp}) => {
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <div className='flex justify-between mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                    onClick={() => setPopUp(false)}
                    >No, Cancel</button>
                    <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
                    onClick={() => console.log("Please like and subscribe")}
                    >Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
