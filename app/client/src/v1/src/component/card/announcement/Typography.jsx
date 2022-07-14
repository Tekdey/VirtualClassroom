import React from 'react'
import PropType from "prop-types"

const Typography = ({children}) => {
  return (
    <h3 className='text-3xl font-semibold'>{children}</h3>
  )
}

Typography.PropType = {
    children: PropType.string
}

export default Typography