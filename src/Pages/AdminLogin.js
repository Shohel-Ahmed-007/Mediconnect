import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [admin, setAdmin] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Predefined admin credentials (system-controlled)
    if (admin.username === "admin" && admin.password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="container">
      <h1>Admin Login</h1>

      <p className="admin-info">
        Admin access is restricted. Only authorized personnel can log in.
      </p>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="username"
          placeholder="Admin Username"
          className="input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          className="input"
          onChange={handleChange}
        />

        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
