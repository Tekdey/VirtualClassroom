import React from 'react'
import { useState } from 'react'

const AdminContainer = ({children}) => {

    const [showAdminWebcam, setShowAdminWebcam] = useState(true)

  return showAdminWebcam ? (
    <>
        <header className="flex justify-center items-end w-full h-40">
            {children}
        </header>
        <div className='w-full flex justify-end'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowAdminWebcam(false)} className="absolute top-28 cursor-pointer" height="48" width="48"><path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/></svg>
        </div>

    </>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowAdminWebcam(true)} className='absolute top-0 left-1/2 cursor-pointer' height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
  )
}

export default AdminContainer