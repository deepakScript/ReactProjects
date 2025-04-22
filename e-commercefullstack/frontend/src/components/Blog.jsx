import React from 'react'

import { blogs } from '../assets/data'

const Blog = () => {
  return (
    <section className='max-padd-container py-16'>
      <h2 className='h2 font-bold text-secondary'>Blog</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {blogs.map((blog) => (
          <div key={blog.title} className='max-h-44.5' >
            <img src={blog.image} alt="blogImg" className='rounded-3xl border-[11px] border-primary
          overflow-hidden relative' />

            <div className='absolute w-full bg-black/24 ' />

            <div className=' bottom-4 left-4 text-[15px]'>
              <h3 className='h3 font-bold text-black'>{blog.title}</h3>
              <h4 className='h4 font-bold text-secondary'>{blog.category}</h4>
              <button className='btn-light !px-3 !py-3'>continue reading</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
