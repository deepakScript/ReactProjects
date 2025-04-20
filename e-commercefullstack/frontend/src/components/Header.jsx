import React,{useState} from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaBarsStaggered, FaRegCircle } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { TbBasket, TbUserCircle } from 'react-icons/tb'
import { RiUserLine } from 'react-icons/ri'


const Header = () => {
  
  const [token, setToken] = useState('');
  return (
    <header className='max-padd-container flex w-full z-50'>
      <div className='flexBetween py-3 '>
        {/* logo left side */}
        <Link to='/' className='flex flex-1'>
        <div className='bold-32'>
          <span className='text-secondary'>Logo</span>
          </div>
        
        </Link>
      </div>


      {/* navbar */}
      <div className='flex-1 bg-pink-200'>
        <Navbar />
      </div>


      {/* botton right side */}
      <div className='flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8 bg-red-500'> 
        <FaBarsStaggered className='xl:hidden cursor-pointer text-xl' />
        <FaSearch className='text-lg cursor-pointer' />
        <Link to='/cart' className='flex relative'>
          <TbBasket className='text-[27px]' />
          <span className='bg-secondary text-white text-[12px]'></span>
        </Link>

        {/* user profile */}
        <div>
          <div>
            {token ? (<div> <TbUserCircle/>   </div>
            ):(
                <button> Login <RiUserLine/>   </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
