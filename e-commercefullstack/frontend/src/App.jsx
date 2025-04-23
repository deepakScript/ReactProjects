import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Testomonials from './pages/Testomonials'
import Cart from './pages/Cart';


// Correct imports:
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    
    <main className='overflow-hidden text-[#404040'>
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path= '/product/:productId' element={<Product />} />
        <Route path='/testomonials' element={<Testomonials />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </main>
  )
}

export default App
