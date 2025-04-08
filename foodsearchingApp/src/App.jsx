import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import ProductCard from './Components/ProductCard'

function App() {

  return (
    <div>
      <Navbar />
      <Searchbar />
      <ProductCard />
    </div>
  )
}

export default App
