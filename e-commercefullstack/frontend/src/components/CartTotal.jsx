import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { getCartAmount, currency, deliveryCharge } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal + deliveryCharge;

  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <span>Subtotal:</span>
          <span>{currency}{subtotal}</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery:</span>
          <span>{currency}{deliveryCharge}</span>
        </div>
        <div className='flex justify-between font-bold text-lg pt-2 border-t'>
          <span>Total:</span>
          <span>{currency}{total}</span>
        </div>
      </div>
      <button className='btn-primary w-full mt-4'>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;