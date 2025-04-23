import React, { useState, useContext } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaBarsStaggered, FaRegCircle } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { TbBasket, TbUserCircle } from 'react-icons/tb'
import { RiUserLine } from 'react-icons/ri'
import { ShopContext } from '../context/ShopContext'


const Header = () => {

  const {token}= useContext(ShopContext);
  
  
  const [menuOppened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  }
  return (
    <header className='max-padd-container flex w-full z-50'>
      <div className='flexBetween py-3 lg:min-w-[340px]'>
        {/* logo left side */}
        <Link to='/' className='flex flex-1'>
          <div className='bold-32'>
            <span className='text-secondary'>Logo</span>
          </div>

        </Link>
      </div>


      {/* navbar */}
      <div className='flex-1 pt-2'>
        <Navbar containerStyles={`${menuOppened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900 /5 z-50" :
          "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1"}`} />
      </div>


      {/* botton right side */}
      <div className='flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8 '>
        <FaBarsStaggered
          onClick={toggleMenu}
          className='xl:hidden cursor-pointer text-xl' />
        <FaSearch className='text-lg cursor-pointer' />
        <Link to={'/cart'} className='flex relative'>
          <TbBasket className='text-[27px]' />
          <span className='bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md'>0</span>
        </Link>

        {/* user profile */}
        <div className='group relative'>
          <div>
            {token ? (<div> <TbUserCircle className='text-[25px]
            cursor-pointer'/>   </div>
            ) : (
              <button
                className='btn-light
                flexCenter gap-x-2'
              > Login <RiUserLine
                  className='text-xl'
                />   </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
