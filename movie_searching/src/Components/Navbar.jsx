import React from 'react'

const Navbar = () => {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
        <div className='left flex items-center space-x-3 justify-center'>
            <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="img" />
            <h1 className='font-bold text-2xl text-white'> Deep Movie</h1>
        </div>
        <div className='right'>
            <ul className='flex space-x-5 text-white justify-center'> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
