import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-1 rounded-full '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2263OLHbMmILCl0-Q31yoe713hs75m42eQ&s" alt="Tailwind CSS chat bubble component"/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hello !!!!, Wasup</div>
      <div className='chat-footer opacity-50 text-sx flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message