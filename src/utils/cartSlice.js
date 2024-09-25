import { createSlice } from "@reduxjs/toolkit";

// Function to load the cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    return [];
  }
};

// Function to save the cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", serializedCart);
  } catch (e) {
    console.error("Could not save cart items to localStorage", e);
  }
};

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
      items: loadCartFromLocalStorage(),
    },
    reducers: {
      addItem: (state, action) => {
        const itemExists = state.items.find((item) => item.id === action.payload.id);
        if (itemExists) {
          itemExists.quantity += 1; // Increase quantity if item exists
        } else {
          state.items.push({ ...action.payload, quantity: 1 }); // Set quantity to 1 for new items
        }
        saveCartToLocalStorage(state.items); // Save updated cart to localStorage
      },
      removeItem: (state, action) => {
        const itemExists = state.items.find((item) => item.id === action.payload.id);
        if (itemExists && itemExists.quantity > 1) {
          itemExists.quantity -= 1; // Decrease quantity if it's more than 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item if quantity is 1
        }
        saveCartToLocalStorage(state.items); // Save updated cart to localStorage
      },
      clearCart: (state) => {
        state.items = [];
        saveCartToLocalStorage(state.items); // Save updated cart to localStorage
      },
    },
  });
  
  export const { addItem, removeItem, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  
