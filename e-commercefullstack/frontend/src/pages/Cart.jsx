import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';

import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, getCartCount, navigate, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      const initialQuantities = {};
      
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size],
            });
            initialQuantities[`${itemId}-${size}`] = cartItems[itemId][size];
          }
        }
      }
      setCartData(tempData);
      setQuantities(initialQuantities);
    }
  }, [products, cartItems]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = (quantities[key] || 0) + 1;
    setQuantities(prev => ({ ...prev, [key]: newValue }));
    updateQuantity(id, size, newValue);
  };

  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantities[key] > 1) {
      const newValue = quantities[key] - 1;
      setQuantities(prev => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  };

  if (cartData.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="h3">Your cart is empty</h3>
        <button 
          onClick={() => navigate('/shop')}
          className="btn-primary mt-4"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className='bg-primary mb-16'>
        <div className='max-padd-container py-10'>
          <h5 className='flexStart gap-x-4'>Cart ({getCartCount()} items)</h5>
        </div>
      </div>
      
      <div className='max-padd-container'>
        <div className='mt-6 space-y-4'>
          {cartData.map((item, i) => {
            const productData = products.find((product) => product._id === item._id);
            const key = `${item._id}-${item.size}`;
            
            return (
              <div key={i} className='rounded-lg bg-white p-4 shadow'>
                <div className='flex items-center gap-4'>
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-16 sm:w-20 rounded"
                  />
                  
                  <div className='flex-1'>
                    <div className='flex justify-between'>
                      <h5 className='h5 line-clamp-1'>{productData.name}</h5>
                      <FaRegWindowClose 
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className='cursor-pointer text-secondary hover:text-red-500' 
                      />
                    </div>
                    
                    <p className='bold-14 my-1'>Size: {item.size}</p>
                    
                    <div className='flex justify-between items-center mt-2'>
                      <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden'>
                        <button 
                          onClick={() => decrement(item._id, item.size)} 
                          className='p-1.5 bg-white text-secondary hover:bg-gray-100'
                        >
                          <FaMinus size={14} />
                        </button>
                        <span className='px-3'>{quantities[key]}</span>
                        <button 
                          onClick={() => increment(item._id, item.size)} 
                          className='p-1.5 bg-white text-secondary hover:bg-gray-100'
                        >
                          <FaPlus size={14} />
                        </button>
                      </div>
                      
                      <h4 className='h4'>
                        {currency}{productData.price * quantities[key]}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className='mt-8'>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;