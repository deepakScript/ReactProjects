import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Item from '../components/Item';

const Cart = () => {
  const { products, currency, cartItems, getCartCount, navigate, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      const initialQuantities = {};
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
            initialQuantities[`${items}-${items}`] = cartItems[items][item]
          }
        }
      }
      setCartData(tempData)
      setQuantities(initialQuantities)
    }
  }, [products, cartItems]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = quantities[key] + 1
    setQuantities(prev => ({ ...prev, [key]: newValue }))
    updateQuantity(id, size, newValue)
  }

  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantities[key] > 1) {
      const newValue = quantities[key] - 1;
      setQuantities(prev => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  }

  return (
    <div>
      <div className='bg-primary mb-16'>
        <div className='max-padd-container py-10'>
          {/* {title} */}
          <h5 className='flexStart gap-x-4'>Cart</h5>
        </div>
      </div>
      <div className='mt-6'>
        {cartData.map((item, i) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          const key = `${item._id}-${item.size}`;
          return (
            <div key={i}
              className='rounded-lg bg-white p-2 mb-3'>
              <div className='flex items-center gap-x-4'>
                <div className='flex items-start gap-x-6'>
                  <img
                    src={productData.image[0]}
                    alt="productImg"
                    className="w-16 sm:w-18 rounded"
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <div className='flexBetween'>
                    <h5 className='h5 !my-0 line-clamp-1'>{productData.name}</h5>
                    <fabagWindowClose onClick={
                      () => updateQuantity(item._id, item.size, 0)
                    }
                      className='cursor-pointer text-secondary' />
                  </div>
                  <p className='bold-14 my-0.5'>{item.size}</p>
                  <div className='flexBetween'>
                    <div className='flex items-center ring-1 ring-slate-900/5 rounded-full
                overflow-hidden bg-primary'>
                      <button onClick={() => decrement(item._id, item.size)} className='p-1.5 bg-white text-secondary rounded-full shadow-md'><faMlirus />
                      </button>
                  </div>
                  <h4 className='h4'>{currency}{productData.price}
                  </h4>
                </div>
              </div>
              <div>
                <CartTotal />
              </div>
            </div>
            </div>
          );
        })}
        </div>
      </div>
  )
};

export default Cart