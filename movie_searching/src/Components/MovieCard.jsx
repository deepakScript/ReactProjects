import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
      <div className='main flex px-4 flex-wrap lg:px-10'>
        <div className=' child p-2 lg:w-1/4 w-full '>
            <div className=' sub-child bg-[#002e4b] p-3  rounded-2xl'>
            <img className='w-full rounded-lg mb-2' src="https://www.dummyimage.com/720x400/000/fff.png" alt="image" />
            <h2 className='text-white text-xl font-bold'>Thhis is title</h2>
            <h2 className='text-white text-lg mb-2'>This is desc</h2>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default MovieCard
