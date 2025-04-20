import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'


const Banner = () => {
  return (
   <section>
    <div>
      <div>
        <h2>Affordable Style, Timeless Appeal</h2>
        <h3>Transform you Closed Today</h3>
        <div>
          <Link to={'/collection'}>
          Explore Collection
          <FaArrowRight />
          </Link>
        </div>
      </div>
        {/* image side */}
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
   </section>
  )
}

export default Banner
