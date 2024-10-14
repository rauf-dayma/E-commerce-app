import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Login.css";
import { useDispatch } from "react-redux";

function Login() {

    
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Use navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      toast.error("Email and password are required.", {
        position: "top-right",
      });
      return;
      
    }

    console.log("Attempting to login with:", email, password); 
    try {
      const url = "http://localhost:3000/api/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.success("Login successful!", {
          position: "top-right",
        });

        // Save JWT token in localStorage if returned
        localStorage.setItem("token", result.token);

        // Navigate to home page after successful login
        setTimeout(() => {
          navigate("/home");
        }, 1000); // Delay to allow toast to show
      } else {
        toast.error(result.message || "Login failed. Please try again.", {
          position: "top-right",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label className="login-label" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="login-input-field"
            type="email"
            name="email"
            placeholder="Enter Your email..."
            value={loginInfo.email}
          />
        </div>
        <div>
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="login-input-field"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={loginInfo.password}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <span className="login-span">
          Don't have an account? <Link to="/signup" className="login-link">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
