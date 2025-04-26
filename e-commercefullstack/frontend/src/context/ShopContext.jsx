import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../assets/data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const currency = 'Nrs'
  const deliveryCharge = 50;
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [ShowSearch, setShowSearch] = useState(true)
  const [token, setToken] = useState('')
  const [cartItems, setCartItems] = useState({})


  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }

    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };

      if (newCartItems[itemId]) {
        if (newCartItems[itemId][size]) {
          newCartItems[itemId][size] += 1;
        } else {
          newCartItems[itemId][size] = 1;
        }
      } else {
        newCartItems[itemId] = { [size]: 1 };
      }

      toast.success("Item added to cart!");
      return newCartItems;
    });
  };

  useEffect(() => {
    console.log('Cart updated:', cartItems);
  }, [cartItems])

  const getCartCount = () => {
    let totalcount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalcount;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newCart[itemId]) {
        newCart[itemId][size] = quantity;
      }
      return newCart;
    });
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items)
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount
  }

  const value = {
    getCartAmount,
    currency,
    deliveryCharge,
    navigate,
    products,
    token,
    setToken,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    addToCart,
    getCartCount,
    cartItems,
    updateQuantity,
    setCartItems
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider