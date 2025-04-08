import React from 'react'

const ProductCard = () => {
  return (
    <div className='main px-4 flex flex-wrap'>
      <div className=" md:w-1/4 w-full p-3">
        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
            <img className='rounded-xl w-full mb-2' src="https://www.dummyimage.com/720x400/000/fff" alt="" />
            <h1 className='text-lg font-bold'>This is title</h1>
            <h3>desc</h3>
            <div className='flex justify-between items-center'>
            <button className='bg-orange-300 px-5 py-1.5 rounded-xl'>Add to Cart</button>
            <button className='bg-green-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
            </div>
        </div>
      </div>

      <div className=" md:w-1/4 w-full p-3">
        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
            <img className='rounded-xl w-full mb-2' src="https://www.dummyimage.com/720x400/000/fff" alt="" />
            <h1 className='text-lg font-bold'>This is title</h1>
            <h3>desc</h3>
            <div className='flex justify-between items-center'>
            <button className='bg-gray-400 px-5 py-1.5 rounded-xl'>Add to Cart</button>
            <button className='bg-gray-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
            </div>
        </div>
      </div>

      <div className=" md:w-1/4 w-full p-3">
        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
            <img className='rounded-xl w-full mb-2' src="https://www.dummyimage.com/720x400/000/fff" alt="" />
            <h1 className='text-lg font-bold'>This is title</h1>
            <h3>desc</h3>
            <div className='flex justify-between items-center'>
            <button className='bg-gray-400 px-5 py-1.5 rounded-xl'>Add to Cart</button>
            <button className='bg-gray-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
            </div>
        </div>
      </div>

      <div className=" md:w-1/4 w-full p-3">
        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
            <img className='rounded-xl w-full mb-2' src="https://www.dummyimage.com/720x400/000/fff" alt="" />
            <h1 className='text-lg font-bold'>This is title</h1>
            <h3>desc</h3>
            <div className='flex justify-between items-center'>
            <button className='bg-gray-400 px-5 py-1.5 rounded-xl'>Add to Cart</button>
            <button className='bg-gray-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
            </div>
        </div>
      </div>

      <div className=" md:w-1/4 w-full p-3">
        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
            <img className='rounded-xl w-full mb-2' src="https://www.dummyimage.com/720x400/000/fff" alt="" />
            <h1 className='text-lg font-bold'>This is title</h1>
            <h3>desc</h3>
            <div className='flex justify-between items-center'>
            <button className='bg-gray-400 px-5 py-1.5 rounded-xl'>Add to Cart</button>
            <button className='bg-gray-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
