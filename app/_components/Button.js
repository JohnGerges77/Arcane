import React from 'react'

function Button(props) {
  return (
    <button
    id={props.id}
    className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full
       bg-violet-50 px-7 py-3 text-black ${props.containClass}`}
    
  >
    {props.leftIcon}

    <span className="relative inline-flex overflow-hidden text-xs uppercase">
      <div>
        {props.title}
      </div>
  
    </span>

    {props.rightIcon}
  </button>
  )
}

export default Button
