import React from 'react'

const ColorButton = ({setBgcolor}) => {
  return (
    <div className='colorButton h-screen flex justify-center space-x-4 items-center'>
      <button className='p-5 border-3 border-grey-200' onClick={()=>setBgcolor('Red')}>Red</button>
      <button onClick={()=>setBgcolor('Blue')}>Blue</button>
      <button onClick={()=>setBgcolor('Green')}>Green </button>
      <button onClick={()=>setBgcolor('Yellow')}>Yellow</button>
    </div>
  )
}

export default ColorButton
