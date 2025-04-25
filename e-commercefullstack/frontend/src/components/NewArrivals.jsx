import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { products } from '../assets/data';
import Item from '../components/Item';

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 10);
    setNewArrivals(data);
  }, [products]);

  return (
    <section className='max-padd-container pt-16 pb-16 bg-primary relative'>
      <h2 className='h2 ml-2 mb-8'>New <span className='text-secondary h2'>Arrivals</span></h2>

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[600px] sm:h-[411px]"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container positioned lower */}
      <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center gap-2 mt-4" />

      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0,0,0,0.2);
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align:center
        }
        .custom-bullet-active {
          background: #3b82f6; /* blue-500 */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default NewArrivals; 