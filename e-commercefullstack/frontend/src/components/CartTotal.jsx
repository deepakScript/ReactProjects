import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {currency , getCartAmount, deliveryCharges} = useContext(ShopContext)
  return (
    <section>
        <h4 className='h4'>Cart Total</h4>
        <div>
            <h5>SubTotal:</h5>
            <p>{currency}{getCartAmount}</p>
        </div>
    </section>
  )
}

export default CartTotal
