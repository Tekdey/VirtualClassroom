import React from 'react'
import PropType from "prop-types"
import { useEffect } from 'react'
import { useState } from 'react'

const NavbarMenu = ({children}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [reduceMenu, setReduceMenu] = useState(false)
    const [menuStyle, setMenuStyle] = useState('')

    useEffect(() => {
      if(reduceMenu && !showMenu){
        setMenuStyle('hidden')
      }else{
        if(showMenu){
          setMenuStyle('fixed flex-col justify-between items-center h-full w-full p-5 bg-white')
        }else{
          setMenuStyle('hidden md:flex flex-col justify-between h-full w-[220px] p-5 bg-white drop-shadow-lg')
        }
      }
    }, [showMenu, reduceMenu])
    
  return (
    <nav>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowMenu(true)} className='absolute top-0 right-0 m-2 block md:hidden cursor-pointer' height="48" width="48"><path d="M5.8 36.35v-3.4h36.4v3.4Zm0-10.65v-3.4h36.4v3.4Zm0-10.65v-3.4h36.4v3.4Z"/></svg>
      {reduceMenu && <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setReduceMenu(false)} className='absolute top-0 left-0 hidden md:block cursor-pointer' height="48" width="48"><path d="m18.75 36.3-2.45-2.45 9.9-9.9-9.9-9.9 2.45-2.45L31.1 23.95Z"/></svg>}
      <div className={menuStyle}>
      <div className='flex flex-col'>
        {!reduceMenu && <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setReduceMenu(true)} className='place-self-end hidden md:block cursor-pointer' height="48" width="48"><path d="M28.05 36.3 15.7 23.95 28.05 11.6l2.45 2.45-9.9 9.9 9.9 9.9Z"/></svg> }
        
        {showMenu && <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowMenu(false)} className='absolute top-0 right-0 m-4 cursor-pointer' height="48" width="48"><path d="m12.45 37.95-2.4-2.4L21.6 24 10.05 12.45l2.4-2.4L24 21.6l11.55-11.55 2.4 2.4L26.4 24l11.55 11.55-2.4 2.4L24 26.4Z"/></svg>}
        
        {children}
      </div>
          <footer>
            <ul className={showMenu ? 'absolute bottom-0 justify-center flex flex-col items-center w-full p-2' : 'flex flex-col text-sm text-center'}>
              <li className='cursor-pointer p-2'>Contact</li>
              <li>© Copyright 2022 {showMenu && '- Bardi Nathan'}</li>
              {!showMenu && <li>- Bardi Nathan -</li>}
            </ul>
          </footer>
      </div>
    </nav>
  )
}

NavbarMenu.PropType = {
    children: PropType.object
}

export default NavbarMenu