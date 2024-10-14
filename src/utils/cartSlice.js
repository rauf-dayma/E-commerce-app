import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      // Check for an existing item in the cart by comparing productId._id
      const existingItem = state.items.find(
        (item) => item.productId._id === action.payload.productId._id
      );
      if (existingItem) {
        // If the product exists, update the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the product does not exist, add it to the cart
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId._id !== action.payload.productId._id
      );
    },
    updateItemQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.productId._id === action.payload.productId._id
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity; // Update quantity directly
      }
    },
  },
});

// Export actions
export const { setCartItems, addItem, removeItem, updateItemQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
