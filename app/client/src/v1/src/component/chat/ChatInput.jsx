import React from 'react'

const ChatInput = () => {
  return (
    <form className="h-32 flex justify-center items-center py-2 px-3 border-t border-black">
        <textarea type="text" name='user_message' placeholder="Il fait beau aujourd'hui ?" className='h-full w-full rounded-tl-lg rounded-bl-lg resize-none border-y border-black border-l' />
        <button type='button' className='bg-white h-full p-3 rounded-tr-lg rounded-br-lg border-y border-black border-r'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M3 20V4l19 8Zm2-3 11.85-5L5 7v3.5l6 1.5-6 1.5Zm0 0V7v6.5Z" />
            </svg>
        </button>
    </form>
  )
}

export default ChatInput