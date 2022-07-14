import React from 'react'

const UserAvatar = ({src}) => {
  return (
    <img src={src} alt="user avatar" className='h-24 w-24 rounded-full' />
  )
}

export default UserAvatar