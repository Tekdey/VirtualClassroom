import React from 'react'
import { useState } from 'react'

const SettingDropDownMenu = ({children}) => {

    const [isActive, setIsActive] = useState()

  return (
    <ul className='flex flex-col gap-1 items-center justify-center w-full'>
        <li onClick={() => setIsActive((prevState) => !prevState)} className="rounded-lg cursor-pointer p-2 border-black w-full text-xl text-center bg-slate-200 ">Parametre</li>
        {isActive && children}
    </ul>
  )
}

export default SettingDropDownMenu