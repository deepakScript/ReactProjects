import React, { use, useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt, FaTruck } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { TbShoppingBagPlus } from 'react-icons/tb'
const Product = () => {

  const [productId] = useParams();
  const {products, currency} = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage ] = useState("")
  const [size, setSize] = useState("")


  const fetchProductData = async () =>{
    const selectProduct = products.fint((item) => item._id === productID)

    if(selectProduct){
      setProduct(selectProduct)
      setImage(selectProduct.Image[0])
      console.log(selectProduct);
      
    }
  }

  useEffect(()=>{
    fetchProductData()

  },[productId, products])

  if(!product){
    return <div>.....Loading</div>
  }
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Product
