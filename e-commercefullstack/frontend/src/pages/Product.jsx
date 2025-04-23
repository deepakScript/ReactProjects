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
  const { products, currency, addToCart } = useContext(ShopContext)
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
              {product.image?.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  key={i}
                  src={item || ''}  // Handle potential null/undefined
                  alt={`Product view ${i + 1}`}
                  className={`max-h-[90px] rounded-lg cursor-pointer ${item === image ? 'ring-2 ring-blue-500' : ''}`}
                  onError={(e) => {
                    e.target.src = ''; // Clear broken images
                    e.target.className = 'max-h-[90px] rounded-lg hidden'; // Hide broken images
                  }}
                />
              ))}
            </div>
            <div className='max-h-[377px] w-auto flex'>
              <img
                src={image || (product.image?.[0] || '')} // Fallback to first image
                alt="Selected product view"
                className='rounded-xl bg-gray-100 w-full h-full object-contain'
                onError={(e) => {
                  e.target.src = product.image?.[0] || '';
                  e.target.className = 'rounded-xl bg-gray-100 w-full h-full object-contain opacity-50';
                }}
              />
            </div>
          </div>
          {/* product details */}
          <div className='flex-[1.5] rounded-2xl xl:px-7'>
            <h3 className='h3 leading-none'>{product?.name || 'Product Name'}</h3>

            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2 text-secondary'>
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

            <h4 className='h4 my-2'>{currency}{product?.price || '00'}.00</h4>
            <p className='max-w-96'>{product?.description || 'No description available'}</p>

            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {product?.sizes?.length ? (
                  [...product.sizes].sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  }).map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSize(item)}
                      className={`${item === size ? "ring-2 ring-slate-900" : "ring-1 ring-slate-300"} medium-14 h-8 w-10 bg-primary rounded transition-all`}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p className='text-sm text-gray-500'>No sizes available</p>
                )}
              </div>
            </div>

            <div className='flex items-center gap-x-4'>
              <button
                onClick={() => product?._id && addToCart(product._id, size)}
                disabled={!size}
                className={`btn-secondary !rounded-lg w-1/2 flexCenter gap-x-2 capitalize ${!size ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Add to Cart <TbShoppingBagPlus />
              </button>
              <button className='btn-light !rounded-lg !py-3.5 hover:text-red-500 transition-colors'>
                <FaHeart />
              </button>
            </div>

            <div className='flex items-center gap-x-2 mt-3'>
              <FaTruckFast className='text-lg' />
              <span className='text-xs'>Free delivery on orders over {currency}500</span>
            </div>

            <hr className='my-3 w-2/3 border-gray-200' />

            <div className='text-sm space-y-1 text-gray-600'>
              <div>✔ Authenticity you can trust</div>
              <div>✔ Enjoy Cash on Delivery</div>
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
