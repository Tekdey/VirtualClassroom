import React from 'react'
import PropType from "prop-types"



const FormButton = ({handleSubmit, children}) => {
  return (
    <button onClick={handleSubmit} type='button' className='bg-blue-500 text-white text-lg font-semibold py-2 w-full rounded-lg'>{children}</button>
  )
}

FormButton.PropType = {
  handleSubmit: PropType.func,
  children: PropType.string
}

export default FormButton