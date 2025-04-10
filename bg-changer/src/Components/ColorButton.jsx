import React from 'react'

const ColorButton = ({setBgcolor}) => {
  return (
    <div className='colorButton flex justify-center space-x-4 items-center'>
      <button className='bg-gray-300 border-3 border-black p-5 rounded-2xl m-4 ' onClick={()=>setBgcolor('Red')}>Red</button>
      <button className='bg-gray-300 border-3 border-black p-5 rounded-2xl m-4 ' onClick={()=>setBgcolor('Blue')}>Blue</button>
      <button className='bg-gray-300 border-3 border-black p-5 rounded-2xl m-4 ' onClick={()=>setBgcolor('Green')}>Green </button>
      <button className='bg-gray-300 border-3 border-black p-5 rounded-2xl m-4 ' onClick={()=>setBgcolor('Yellow')}>Yellow</button>
    </div>
  )
}

export default ColorButton
