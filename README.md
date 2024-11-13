# E-commerce Web App

## Overview  
This E-commerce web application is built with modern technologies and provides a complete shopping experience. It includes essential features such as product listing, cart functionality, user authentication, and secure checkout. The application ensures a seamless experience with state management using **Redux**, while the backend API efficiently manages products, users, and orders.

---

## Features
- **User Authentication**: Secure login and signup using JWT (JSON Web Tokens).
- **Product Listing**: Displays a variety of products fetched dynamically from the database.
- **Cart Management**: Add, update, or remove items from the cart with quantities reflected in real-time.
- **Responsive Design**: Optimized for all devices, from desktops to mobile phones.
- **Checkout Process**: Integrated UPI payment for seamless transactions.
- **Profile Management**: Users can manage their account details, view order history, and update their profile.
- **Admin Panel**: Allows admins to add, edit, or remove products and manage user orders.

---

## Tech Stack

### Frontend
- **React**: For building dynamic UI components.
- **Redux**: State management to handle cart and user data.
- **HTML5, CSS3**: Responsive design and styling.
- **JavaScript (ES6)**: Logic implementation and DOM manipulation.
- **React Router**: For navigation across pages.
- **Fetch API**: For making API requests to the backend.

### Backend
- **Node.js**: Backend environment.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing products, users, and orders.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.

---

## Project Structure


---

## Installation and Setup

### Prerequisites
- **Node.js**
- **MongoDB**
- **Git**

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/e-commerce-app.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables: Create a `.env` file in the backend directory and add the following variables:
    ```
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    PORT=5000
    ```
5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Run the React app:
    ```bash
    npm start
    ```

---

## API Endpoints

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| GET    | `/api/products`         | Fetch all products                |
| GET    | `/api/products/:id`     | Fetch product by ID               |
| POST   | `/api/users/signup`     | User registration                 |
| POST   | `/api/users/login`      | User login and JWT generation     |
| GET    | `/api/cart`             | Get cart items for logged-in user |
| POST   | `/api/cart`             | Add items to the cart             |
| PUT    | `/api/cart/:id`         | Update cart item quantity         |
| DELETE | `/api/cart/:id`         | Remove an item from the cart      |
| POST   | `/api/checkout`         | Process UPI payments              |

---

## Screenshots

### Homepage:
![Homepage](./screenshots/homepage.png)

### Product Details Page:
![Product Details](./screenshots/product-details.png)

### Cart Page:
![Cart Page](./screenshots/cart.png)

---

## Usage

1. **Register/Login**: New users can sign up or existing users can log in.
2. **Browse Products**: Explore products from different categories.
3. **Add to Cart**: Select products and add them to your cart.
4. **Manage Cart**: Adjust quantities or remove items from the cart.
5. **Checkout**: Complete the order through UPI payment.
6. **Profile**: View and edit user profile and order history.

---

## Contributing

We welcome contributions! If you have suggestions or find any issues, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any inquiries or feedback, please contact **Your Name**.

