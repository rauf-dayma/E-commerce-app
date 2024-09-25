import React from 'react';
import { useSelector } from 'react-redux';
import "./styles/Checkout.css";

function Checkout() {
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
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <div className="order-summary">
        <h2>Your Order</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="payment-section">
        <h2>Payment Details</h2>
        <p><strong>Total Amount: </strong>${getTotalPrice().toFixed(2)}</p>

        {/* UPI Mock Section */}
        <div className="upi-integration">
          <h3>UPI Payment</h3>
          <label htmlFor="upi-id">Enter your UPI ID:</label>
          <input type="text" id="upi-id" placeholder="example@upi" className="upi-input" />
        </div>

        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
 