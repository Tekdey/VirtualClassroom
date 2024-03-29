import React from 'react'
import { useContext } from 'react'
import { SignInFormContext } from '../../../utils/context/SignInFormContext'

const HidePasswordButton = () => {

  const {setShowPassword, showPassword} = useContext(SignInFormContext)

  return (
        <div onClick={() => setShowPassword((prevState) => !prevState)} className='border border-l-0 rounded-tr-lg rounded-br-lg px-2 flex items-center cursor-pointer'>
          {showPassword ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-label="Afficher le mot de passe"><path d="M10.94 6.08A6.93 6.93 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15.23 15.23 0 0 1-.9 1.64 1 1 0 0 0-.16.55 1 1 0 0 0 1.86.5 15.77 15.77 0 0 0 1.21-2.3 1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a7.77 7.77 0 0 0-1.4.12 1 1 0 1 0 .34 2ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.1 3.09a14.62 14.62 0 0 0-3.31 4.8 1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm6.36 9.19 2.45 2.45A1.81 1.81 0 0 1 12 14a2 2 0 0 1-2-2 1.81 1.81 0 0 1 .07-.52ZM12 18c-3.18 0-6.17-2.29-7.9-6a12.09 12.09 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18Z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-label="Masquer le mot de passe"><path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 0 0 0-.8ZM12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"/></svg>
          }
        </div>
  )
}

export default HidePasswordButton