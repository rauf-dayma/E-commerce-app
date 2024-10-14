import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  setCartItems,
  updateItemQuantity,
} from "../utils/cartSlice";
import "./styles/Cart.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Fetch cart items from the server on page load
  useEffect(() => {
    fetch(`http://localhost:3000/api/cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Send token for authentication
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of items
        dispatch(setCartItems(data));
      })
      .catch((error) => {
        console.error("Failed to fetch cart items:", error);
        toast.error("Error fetching cart items");
      });
  }, [dispatch]);

  // Function to update quantity in the cart on the server
  const updateQuantity = (item, quantity) => {
    console.log(item._id)
    console.log(item.productId._id)
    fetch(`http://localhost:3000/api/cart/update/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        productId: item.productId._id, // Send the actual product ID from the fetched data
        quantity, // Updated quantity
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Dispatch updateItemQuantity to update the Redux store
        dispatch(updateItemQuantity({ productId: item.productId, quantity })); // Update item quantity in the Redux state
        toast.success("Cart updated!");
      })
      .catch((error) => {
        console.error("Error updating cart:", error);
        toast.error("Failed to update cart");
      });
  };

  // Function to remove item from the cart
  const removeCartItem = (item) => {
    // Use the productId in the URL
    fetch(`http://localhost:3000/api/cart/remove/${item.productId._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(removeItem(item)); // Update the Redux state after a successful delete
          toast.success("Item removed from cart");
        } else {
          throw new Error("Failed to remove item");
        }
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
        toast.error("Failed to remove item from cart");
      });
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + (item.productId?.price || 0) * (item.quantity || 1),
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
            {item.productId ? (
              <>
                <img
                  src={item.productId.thumbnail}
                  alt={item.productId.title}
                  width="100px"
                />
                <div className="item-details">
                  <h3>{item.productId.title}</h3>
                  <p>Price: ${item.productId.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      disabled={item.quantity <= 1} // Prevent quantity from going below 1
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    Total: ${(item.productId.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </>
            ) : (
              <p>Product details not available</p> // Fallback for null productId
            )}
            <button
              className="remove-item"
              onClick={() => removeCartItem(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
        <Link to={"/checkout"}>
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
