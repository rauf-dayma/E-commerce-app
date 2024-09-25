import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import "./styles/Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.thumbnail} alt={item.title} width="100px" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(removeItem(item))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addItem(item))}>+</button>
              </div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button className="remove-item" onClick={() => dispatch(removeItem(item))}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
       <Link to={"/checkout"}> <button className="checkout-btn">Checkout</button></Link>
      </div>
    </div>
  );
}

export default Cart;
