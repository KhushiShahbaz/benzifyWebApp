import React from 'react'

function CustomButton({text,onClick,textColor}) {
  return (
    <button
    key={text}
    onClick={onClick}
    className={`text-[16px] leading-none cursor-pointer border border-${textColor} text-${textColor} px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 `}
  >
    {text}
  </button>
  
  )
}

export default CustomButton
