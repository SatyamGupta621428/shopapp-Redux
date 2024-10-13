import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update } from '../redux/slices/CartSlice';
import '../style.css'

function Product({ post }) {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const foundItem = cart.find((item) => item.id === post.id);
    const initialUnits = foundItem ? foundItem.units : 0;
    const [units, setUnits] = useState(initialUnits);

    const addToCart = () => {
        const foundItem = cart.find((item) => item.id === post.id);

        if (foundItem) {
            setUnits(foundItem.units + 1);
            dispatch(update({ id: post.id, units: foundItem.units + 1 }));
        } else {
            const newItem = { ...post, units: 1 };
            dispatch(add(newItem));
            setUnits(1);
            toast.success("Item added to Cart");
        }
    };

    const removeFromCart = () => {
        const foundItem = cart.find((item) => item.id === post.id);
        if (foundItem) {
            if (foundItem.units > 1) {
                setUnits(foundItem.units - 1);
                dispatch(update({ id: post.id, units: foundItem.units - 1 }));
            } else {
                dispatch(remove(post.id));
                setUnits(0);
                toast.error("Item removed from Cart");
            }
        }
    };

    return (
        <div className="product-card">  {/* Apply the product-card class */}
            <div className="product-title">{post.title}</div>
            <div className="product-description">{post.description}</div>
            <img className="product-image" src={post.image} alt={post.title} />
            <div className="product-price">{units > 1 ? units * post.price : post.price}</div>
            <div className="button-container">
                <button className="product-button" onClick={removeFromCart}>-</button>
                <span className="units-display">{units}</span>
                <button className="product-button" onClick={addToCart}>+</button>
            </div>
        </div>
    );
}

export default Product;
