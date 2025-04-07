import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='main flex justify-center py-5 px-4'>
        <input type="text"
        placeholder='Search'
        value={props.searchMovie}
        onChange={(e) => props.setSearchMovie(e.target.value)}
        className= ' w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black rounded-l-lg' />
        <button 
        onClick={props.fetchMovieData}
        className='bg-[#40407a] text-white px-3 rounded-r-lg  border-b-2 border-t-2 border-r-2 border-gray-500'>
            Search
        </button>
      
    </div>
  )
}

export default SearchBar
