import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ containerStyles }) => {
  const navLinks = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/collection',
      title: 'Collection'
    },
    {
      path: '/testimonial',  // Fixed typo in path
      title: 'Testimonial'   // Fixed typo in title
    },
    {
      path: '/contact',      // Changed to route path instead of mailto
      title: 'Contact'
    }
  ]

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink 
          to={link.path} 
          key={link.title}
          className={({ isActive }) => 
            `px-3 py-2 rounded-full transition-colors duration-200 ${
              isActive 
                ? "active-link" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`
          }
          end  // Important for home link to only match exactly
        >
          <div className='flexCenter gap-x-1'>
            {link.title}
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar