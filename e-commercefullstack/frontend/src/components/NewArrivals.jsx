import Title from './Title'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {products} from '../assets/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Item from '../components/Item';

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(()=>{
    const data = products.slice(0, 10);
    console.log(data);
    
    setNewArrivals(data);
  },[products])

  return (
    <section className='max-padd-container pt-16 pb-6 bg-primary'>
      <h2 className='h2 ml-2' > New <span className='text-secondary h2'>Arrivals</span></h2>
      {/* sweeper container */}

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
          slidesPerView: 2,
          sapceBetween: 30,
        },
        700:{
          slidesPerView: 3,
          sapceBetween: 30,
        },
        1024:{
          slidesPerView: 4,
          sapceBetween: 30,
        },
        1200:{
          slidesPerView: 5,
          sapceBetween: 30,
        }
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="h-[555px]  sm:h-[411px]"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
          ))}
        
      </Swiper>
    </section>
  )
}

export default NewArrivals
