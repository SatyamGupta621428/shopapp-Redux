import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
import "../CartItem.css"; // Import the CSS file

function CartItem({post, itemIndex}) {
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state)
  const [units, setUnits] = useState(post.units);

  const addToCart = () => {
    const foundItem = cart.find((item) => item.id === post.id);
    if (foundItem) {
        setUnits(foundItem.units + 1)
        dispatch(update({id: post.id, units: foundItem.units + 1}))
    } else {
        const newItem = {...post, units: 1}
        dispatch(add(newItem))
        setUnits(1);
        toast.success("Item added to Cart");
    }
  }

  const removeFromCart = () => {
    const foundItem = cart.find((item) => item.id === post.id);
    if (foundItem) {
        if (foundItem.units > 1) {
            setUnits(foundItem.units - 1)
            dispatch(update({ id: post.id, units: foundItem.units - 1 }));
        } else {
            dispatch(remove(post.id));
            setUnits(0);
            toast.error("Item removed from Cart");
        }
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={post.image} alt={post.title}/>
      </div>
      <div className="cart-item-info">
        <h1 className="cart-item-title">{post.title}</h1>
        {/* <p className="cart-item-description">{post.description}</p> */}
        <p>Units: {units}</p>
        <p>Amount: ${post.units * post.price}</p>
      </div>
      <div className="cart-item-controls">
        <button onClick={removeFromCart} className="quantity-button">-</button>
        <span className="quantity-display">{units}</span>
        <button onClick={addToCart} className="quantity-button">+</button>
      </div>
    </div>
  )
}

export default CartItem;
