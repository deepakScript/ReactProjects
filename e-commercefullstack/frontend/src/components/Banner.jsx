import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'


const Banner = () => {
  return (
   <section className='max-padd-container pt-16 pb-6 bg-primary'>
    <div className='flexBetween bg-white'>
      {/* left side */}
      <div className='hidden lg:block flex-1 px-6 xl:px-12'>
        <h2 className='h2 uppercase'>Affordable Style, Timeless Appeal</h2>
        <h3 className='h4 uppercase'>Transform you Closed Today</h3>
        <div>
          <Link to={'/collection'} className='btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group'>
          Explore Collection
          <FaArrowRight className='bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px]
          group-hover:-rotate-[20deg] transition-all duration-500
          ' />
          </Link>
        </div>
      </div>
        {/* image side */}
      <div>
        <img src={banner} alt="" className='rounded-tl-3xl 
        rounded-bl-3xl' />
      </div>
    </div>
   </section>
  )
}

export default Banner
