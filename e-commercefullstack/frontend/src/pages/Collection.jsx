import React from 'react'
import ShowSearch from '../components/ShowSearch'

const Collection = () => {
  return (
    <div className='max-padd-container !px-0'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16 '>
        <div className='min-w-72 bg-primary p-4 pl-6 rounded-xl
        lg:pl-12 rounder-r-xl'>
          <ShowSearch />
          <div>
            <h5>Categories</h5>
            <div>
              {["Men", "Women", "kids"].map((cat) =>(
                <label key={cat} className='flex items-center gap-x-2'>
                  <input type="checkbox" value={cat}
                  className='w-3' />
                  </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
