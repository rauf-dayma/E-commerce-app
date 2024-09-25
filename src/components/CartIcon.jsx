import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./styles/CartIcon.css"



function CartIcon() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faCartShopping} />
      {cartCount > 0 && (
        <span className="cart-count-badge">{cartCount}</span>
      )}
    </div>
  );
}

export default CartIcon;
