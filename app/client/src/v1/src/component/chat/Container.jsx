import React from 'react'
import PropType from "prop-types"
import { useState } from 'react'

const Container = ({children}) => {

    const [showChat, setShowChat] = useState(true)

  return (
    <>
    {showChat ? 
    <div className="w-[350px] h-screen flex flex-col border-l-2 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowChat(false)} className='absolute z-10 cursor-pointer' height="48" width="48"><path d="m18.75 36.3-2.45-2.45 9.9-9.9-9.9-9.9 2.45-2.45L31.1 23.95Z"/></svg>
        {children}
    </div> :
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowChat(true)} className='absolute top-1/2 right-0 z-10 cursor-pointer' height="48" width="48"><path d="M28.05 36.3 15.7 23.95 28.05 11.6l2.45 2.45-9.9 9.9 9.9 9.9Z"/></svg>
    }
    </>
  )
}

Container.PropType = {
    children: PropType.object
}

export default Container