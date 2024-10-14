import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import "./styles/Header.css"; // Assuming you have some CSS for styling

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Update the search term in the parent component
    setSearchTerm(value); // Call the prop function to update the search term in App.js
    console.log("Search Term:", value); // Debugging: Log the search term
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/home" className="nav-logo">
          <h1>MyStore</h1>
        </Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={inputValue}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>

        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
