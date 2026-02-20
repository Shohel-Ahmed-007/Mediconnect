import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/appointment");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" className="btn">
          Login
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => navigate("/signup")}
          style={{ marginTop: "10px" }}
        >
          Go to Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
