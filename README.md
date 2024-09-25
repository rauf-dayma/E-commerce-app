E-Commerce Application
This is a basic E-Commerce web application built with React, Redux for state management, and localStorage for persisting cart items. The app allows users to browse products, add them to the cart, adjust quantities, and proceed to checkout with a simple UPI payment mock integration.

Table of Contents
Features
Technologies Used
Installation
Running the Application
Folder Structure
Components Overview
Redux Store Setup
Future Improvements
Features
Product List: Users can view products and detailed product descriptions.
Add to Cart: Users can add items to the cart.
Cart Management: Users can increase or decrease item quantities in the cart.
Persisting Cart: Cart items are saved in localStorage to maintain the state across page refreshes.
Checkout: Users can proceed to checkout with an order summary.
UPI Payment Mock: Simple UPI input section for payment (mock).
Toast Notifications: Feedback for adding/removing items in the cart.
Technologies Used
React: Front-end library for building UI components.
Redux & Redux Toolkit: State management for handling cart functionality.
React Router: For navigation between different routes.
Toastify: For toast notifications.
LocalStorage: For persisting the cart state.
CSS: For styling the components.

Components Overview
1. App.jsx
The main application component that sets up the Provider for Redux and passes the searchTerm state to the header.

2. Header.jsx
Displays the site logo and a search bar, allowing users to search for products. It also shows the cart icon with the number of items in the cart.

3. ProductDetails.jsx
Displays detailed information about a product and allows users to add the product to their cart. It includes toast notifications to notify the user if an item is already in the cart.

4. Cart.jsx
Displays all items in the cart, with the ability to increase or decrease the quantity of each item. The component shows the total price and allows the user to proceed to checkout.

5. Checkout.jsx
Displays a summary of the order and a mock UPI payment section for the user to enter their UPI ID and proceed with the payment (mocked for now).

6. cartSlice.js
Handles the cart logic using Redux Toolkit’s createSlice function. The cart state is persisted to localStorage and includes actions for adding, removing, and clearing cart items.

Redux Store Setup
cartSlice.js: The cart slice manages the cart items, including:

addItem: Adds an item to the cart if it doesn't already exist.
removeItem: Removes an item from the cart.
clearCart: Clears all items from the cart.
appStore.js: The Redux store is created using Redux Toolkit’s configureStore function and includes the cart reducer.




GitHub Link

https://github.com/rauf-dayma/E-commerce-app

