// Footer.jsx
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to our E-commerce store! We offer a wide range of products with amazing deals and a seamless shopping experience. 
            Your satisfaction is our priority.
          </p>
        </div>
        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Commerce App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
