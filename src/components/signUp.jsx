import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Signup.css";

function Signup() {
  const [SignupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Use navigate hook

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = SignupInfo;
    if (!name || !email || !password) {
      toast.error("Name, email, and password are required.", {
        position: "top-right",
      });
      return; // Early return if inputs are missing
    }

    try {
      const url = "http://localhost:3000/api/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignupInfo),
      });

      const result = await response.json();

      if (response.status === 201) {
        toast.success("Registration successful!", {
          position: "top-right",
        });
        console.log(result);
        // Navigate to login page after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 1000); // Slight delay for toast to display
      } else {
        toast.error(result.message || "Error during registration", {
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
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup} className="signUpForm">
        <div>
          <label className="lable" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            className="input-field"
            type="text"
            name="name"
            autoFocus
            placeholder="Enter Your Name..."
            value={SignupInfo.name}
          />
        </div>
        <div>
          <label className="lable" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter Your email..."
            value={SignupInfo.email}
          />
        </div>
        <div>
          <label className="lable" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="input-field"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={SignupInfo.password}
          />
        </div>
        <button type="submit">Signup</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
