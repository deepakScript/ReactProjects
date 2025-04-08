import React from 'react'

const ProductCard = ({ allfood, loading }) => {
    return (
        <div className='main px-4 flex flex-wrap lg:px-10'>
            {allfood.map((item, index) => {
                const { label,calories, dishType, cuisineType, iamge } = item.recipe; 
                return (
                    <div className=" md:w-1/4 w-full p-3">
                        <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
                            <img className='rounded-xl w-full mb-2' src={Image} alt="image" />
                            <h1 className='text-lg font-bold'>{label}</h1>
                            <h3> Calories: {calories}</h3>
                            <h3> Dish Types: {dishType}</h3>

                            <div className='flex justify-between items-center'>
                                <button className='bg-orange-300 px-5 py-1.5 rounded-xl'>Add to Cart</button>
                                <button className='bg-green-600 px-5 py-1.5 rounded-xl'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
            )
            }
        </div>
    )
}

export default ProductCard
