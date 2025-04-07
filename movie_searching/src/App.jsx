import React,{ useState } from 'react'
import './App.css'
import MovieCard from './Components/MovieCard'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
  try {
    setLoading(true);
    const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=3568dab`);
    const data = await res.json();
    setAllMovieData(data.search);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
    
  }
  }
  return (
    <>
      <Navbar />
      <div className='bg'>
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </>
  )
}

export default App
