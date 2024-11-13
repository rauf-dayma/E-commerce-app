// routes/cartRoutes.js
import { verifyToken } from "../Controller/auth.controller.js";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateCartItem,
} from "../Controller/Cart.controller.js";

export function cartRoutes(app) {
  app.get("/api/cart", verifyToken, getCartItems);

  // Route to add item to cart
  app.post("/api/cart/add", verifyToken, addToCart);

  // Route to update item quantity in cart
  app.put("/api/cart/update/:productId", verifyToken, updateCartItem); // New route

  // Route to remove item from cart
  app.delete("/api/cart/remove/:productId", verifyToken, removeFromCart);
}
