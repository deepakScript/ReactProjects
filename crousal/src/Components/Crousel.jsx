import React, { useState } from 'react'

const images = [
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg"
];

const Crousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    return (
        <div className='flex justify-center items-center p-5'>
            <div  onClick={prevSlide} className=' left-arrow bg-gray-200 rounded-2xl p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>
            <div className='image'>
                {images.map((image, index) => 
                current === index && (
                    <div className='flex justify-center '>
                    <img  key={index} src={image} alt={`Slide ${index}`} className='w-[80%] h-full object-cover border-2 rounded-2xl' />
                    </div>
                ))}
            </div>
            <div className="right-arrow bg-gray-200 rounded-2xl p-2" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </div>
        </div>
    )
}

export default Crousel
