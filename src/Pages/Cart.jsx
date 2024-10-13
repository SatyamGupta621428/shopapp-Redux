import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import "../Cart.css"; // Import the CSS file

function Cart() {
  const {cart} = useSelector((state)=>state)
  const totalItems = cart.reduce((acc, curr)=>acc + curr.units, 0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.units * curr.price, 0))
  }, [cart])

  return (
    <div className="cart-container">
      {
        cart.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} post={item} itemIndex={index}/>
                })
              }
            </div>

            <div className="cart-summary">
               <div className="cart-summary-content">
                  <div className="cart-summary-header">Your Cart Summary</div>
                  <p>Total Items: {totalItems}</p>
                  <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                  <button className="checkout-button">Check Out Now</button>
               </div>
            </div>

          </div>
        ) : (
          <div className="empty-cart">
            <h1>Cart Empty</h1>
            <Link to="/">
              <button className="shop-now-button">Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart;
