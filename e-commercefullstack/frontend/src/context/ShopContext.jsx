import React from 'react'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../assets/data'

export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
  const currency = 'Nrs'
  const deliveryCharge = 50;
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [ShowSearch, setShowSearch] = useState(false)
  const [token, setToken] = useState('hello')

  const value = {currency, deliveryCharge, navigate, products, token, setToken, search, setSearch, ShowSearch, setShowSearch}
      
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>

  )
}

export default ShopContextProvider
