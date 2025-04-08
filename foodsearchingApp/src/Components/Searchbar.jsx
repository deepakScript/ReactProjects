import React from 'react'

const Searchbar = ({search, setSearch, fetchFood}) => {
  return (
    <div className='main flex justify-center py-10'>
      <input type="text"
      placeholder='Search for food items'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='bg-gray-200 py-1.5 px-2 w-80 border-2 border-gray-400 rounded-l-lg focus:outline-none focus:border-gray-500'
      />
      <button onClick={fetchFood} className='bg-[#F8EFBA] px-5 py-1.5 border-x-2 border-b-2 border-gray-400 rounded-r-lg'>Search</button>
    </div>
  )
}

export default Searchbar
