import React from 'react'
import PropType from "prop-types"



const FormButton = ({handleSubmit}) => {
  return (
    <button onClick={handleSubmit} type='button' className='bg-blue-500 text-white text-lg font-semibold py-2 w-full rounded-lg'>Suivant</button>
  )
}

FormButton.prototype = {
  handleSubmit: PropType.func
}

export default FormButton