import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-1 rounded-full '>
          <img src="https://i.insider.com/5d10b0472516e92f88534f1a?width=700" alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hello !!!!, Wasup</div>
      <div className='chat-footer opacity-50 text-sx flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message