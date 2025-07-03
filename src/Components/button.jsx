import React from 'react'

function CustomButton({text,onClick}) {
  return (
    <button
    key={text}
    onClick={onClick}
    className="cursor-pointer border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
>
    {text}
</button>
  )
}

export default CustomButton
