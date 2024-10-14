import Cart from "../Model/Cart.model.js";

// Get Cart Items for Logged-in User
export const getCartItems = async (req, res) => {
  const { userId } = req.user; // Assume user ID is available via middleware

  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId"); // Populating product details
    if (!cart) {
      return res.status(404).json([]);
    }

    res.status(200).json(cart.items); // Return the cart items
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add Item to Cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const { userId } = req.user;

  if (!userId || !productId) {
    return res.status(400).json({ message: "User ID and Product ID are required" });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Update Cart Item Quantity
export const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const { userId } = req.user;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find((item) => item.productId.toString() === productId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity; // Update the quantity
    await cart.save();

    res.status(200).json(cart.items); // Return updated cart items
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove Item from Cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.params; // Extract productId from URL params
  const { userId } = req.user;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    console.log("Removing product with ID:", productId);

    // Remove the item with matching productId
    const updatedItems = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.items = updatedItems; // Update the cart's items

    await cart.save();

    console.log("Updated cart items:", cart.items); // Log updated items to verify

    res.status(200).json(cart.items); // Return updated cart items
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Clear the Cart
export const clearCart = async (req, res) => {
  const { userId } = req.user;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = []; // Clear the cart items
    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully", items: cart.items });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
