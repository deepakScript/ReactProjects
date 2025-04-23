import React, { use, useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt, FaTruck } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { products } from '../assets/data'
import { FaTruckFast } from 'react-icons/fa6'
import Footer from '../components/Footer'
import ProductDescription from '../components/ProductDescription'
import ProductFeatures from '../components/ProductFeatures'
const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")


  const fetchProductData = async () => {
    if (!productId) {
      console.log("No product ID provided.");
      return;
    }

    const selectedProduct = products.find((item) => item._id === productId);

    if (selectedProduct) {
      setProduct(selectedProduct);
      if (selectedProduct.Image && selectedProduct.Image.length > 0) {
        setImage(selectedProduct.Image[0]);
      }
      console.log("Selected Product:", selectedProduct);
    } else {
      console.log("Product not found.");
    }
  };



  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!product) {
    return <div>.....Loading</div>
  }
  return (
    <div className=''>
      <div className='max-padd-container mt-3'>
        {/* {product.data} */}

        <div className='flex gap-12 flex-col xl:flex-row bg-white pb-16 rounded-2xl'>
          {/* product image */}
          <div className='flex flex-1 gap-x-2 xl:flex-1'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
              {product.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  key={i}
                  src={item}
                  alt=""
                  className="max-h-[90px] roudned-lg"
                />
              )
              )}
            </div>
            <div className='max-h-[377px] w-auto flex'>
              <img src={image} alt=""
                className='rounded-xl bg-gray-100' />
            </div>
          </div>
          {/* product details */}
          <div className='flex-[1.5] rounded-2xl xl:px-7'>
            <h3 className='h3 leading-none'>{product.name}</h3>

            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2
              text-secondary'>
                <div className='flex gap-x-2 text-secondary'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>
            <h4 className='h4 my-2'>{currency}{product.price}.00</h4>
            <p className='max-w-96'>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a, b) => {
                  const order = ["S", "M", "L", "XL", "XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                  <button
                  onClick={() => setSize(item)}
                  className={`${item === size ? "ring-slate-900/20": "ring-1 ring-slate-900/5"} medium-14 h-8 w-10 bg-primary rounded`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <button className='btn-secondary !rounded-lg 
              w-1/2 flexCenter gap-x-2 capitalize
              '>Add to Cart <TbShoppingBagPlus /> </button>
              <button className='btn-light !rounded-lg !py-3.5'> <FaHeart /> </button>
            </div>
            <div className='flex items-center gap-x-2 mt-3'>
              <FaTruckFast className='text-lg' />
              <span className=' text-xs'>Free deliver on order over 500</span>
            </div>
            <hr className='my-3 w-2/3' />
            <div>
              <div>Authenticity you can trust</div>
              <div>Enjoy Cash on Delivery for your convenience</div>
              <div>Enjoy cash on deliver for your convenience</div>
            </div>
          </div>
        </div>
        {/* product description */}
       <ProductDescription product={product} />
       <ProductFeatures product={product} />
      </div>
      <Footer />
    </div>
    
  )
}

export default Product
