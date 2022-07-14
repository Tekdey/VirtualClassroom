import React from 'react'
import PropType from "prop-types"
import HidePasswordButton from '../button/HidePasswordButton'
import { useContext } from 'react'
import { SignInFormContext } from '../../../utils/context/SignInFormContext'

const Input = ({id,name, type, placeholder, label, style}) => {

  const {showPassword, setFormData} = useContext(SignInFormContext)

  return (
    <div className='flex flex-col'>
        <label htmlFor={id} className='text-lg font-semibold'>{label}</label>
        <div className='flex w-full'>
          <input 
          onChange={(event) => setFormData((prevState) => ({...prevState, [event.target.name]: event.target.value }))} 
          name={name} 
          id={id} 
          type={type === 'password' && !showPassword ? type : 'text'} 
          placeholder={placeholder || ""} 
          className={type !== 'password' ? 'border rounded-lg h-8 w-full focus:border-blue-500 py-5 px-2 text-sm' : 'border border-r-0 rounded-tl-lg rounded-bl-lg h-8 w-full focus:border-blue-500 py-5 px-2 text-sm'} 
          style={style || {}}/>
          {type === 'password' && <HidePasswordButton />}
        </div>
    </div>
  )
}

Input.PropType = {
    id: PropType.string,
    name: PropType.string,
    type: PropType.string,
    placeholder: PropType.string,
    label: PropType.string,
    style: PropType.object,
}

export default Input