import React from 'react'
import { useState } from 'react'

const CourseTitle = () => {

    const [showTitle, setShowTitle] = useState(true)

  return showTitle ? (
    <>
        <div className='flex justify-end w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowTitle(false)} className='z-10 cursor-pointer absolute' height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
        </div>
        <h1 className="text-3xl font-semibold p-10">
          Cours sur les associations de table sequelize
        </h1>
    </>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowTitle(true)} className='absolute bottom-0 left-1/2 z-10 cursor-pointer' height="48" width="48"><path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/></svg>
  )
}

export default CourseTitle