import React from 'react'
import PropType from "prop-types"

const MenuButton = ({children}) => {
  return (
    <li className='list-none rounded-lg p-2 border-black w-full text-xl text-center cursor-pointer bg-slate-200 '>{children}</li>
  )
}

MenuButton.PropType = {
  children: PropType.string
}

export default MenuButton