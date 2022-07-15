import React from 'react'

const Message = () => {
  return (
    <div className='p-1 bg-white text-black'>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex w-full items-center'>
                <img src="/assets/image/default_user.png" alt="user avatar" className='rounded-full h-10' />
                <p className='font-semibold w-full text-center'>Nathan Bardi</p>
            </div>
            <div className='flex flex-col px-3'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, suscipit!</p>
            </div>
        </div>
    </div>
  )
}

export default Message