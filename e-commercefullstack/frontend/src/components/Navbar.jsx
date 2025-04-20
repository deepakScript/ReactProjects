import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  const navLinks = [
    {
      Path: '/',
      title: 'Home'
    },
    {
      path: '/collection',
      title: 'Collection'
    },
    {
      path: '/testomonial', 
      title: 'Testomonial'
    },
    {
      path: '/mailto:info@deepakchhantya.com.np',
      title: 'Contact'
    }
  ]
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink to={link.path} key={link.title}
        className={({isActive})=> `${isActive ? "active-link" : ""} px-3 py-2 rounded-full `}>
          
          <div className='flexCenter gap-x-1'>
            {link.title}
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
