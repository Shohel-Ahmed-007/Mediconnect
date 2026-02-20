import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" className="btn">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
