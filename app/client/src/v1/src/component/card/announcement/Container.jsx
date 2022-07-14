import React from 'react'
import PropType from "prop-types"

const Container = ({children}) => {
  return (
    <div className='border-2 rounded-lg flex flex-col w-full max-h-64 gap-2 overflow-y-auto'>
        {children}
    </div>
  )
}

Container.PropType = {
    children: PropType.object
}

export default Container