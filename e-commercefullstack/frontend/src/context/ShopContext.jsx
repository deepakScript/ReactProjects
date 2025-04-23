import React, { use, useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../assets/data'


import toast from 'toastify-js'
import "toastify-js/src/toastify.css"

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const currency = 'Nrs'
  const deliveryCharge = 50;
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [ShowSearch, setShowSearch] = useState(true)
  const [token, setToken] = useState('')

  const [cartItems, setCartItems] = useState({})
  


  // adding items to cart

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first")
      return;
    }

    let cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    setCartItems(cartData)
  }

  useEffect(() => {

  }, [cartItems])

  // cart count

  const getCartCount = ()=> {
    let totalcount = 0
    for (const items in cartItems){
      for (const item in cartItems[items]){
        try{
          if(cartItems[items][item] > 0){
            totalcount += cartItems[items][item];
           
          }
        }catch(error){
          console.log(error);
          
        }
      }
    }
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setCartItems(cartData)
  }

  const 


  const value = { currency, deliveryCharge, navigate, products, token, setToken, search, setSearch, ShowSearch, setShowSearch, addToCart, getCartCount}

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>

  )
}

export default ShopContextProvider
