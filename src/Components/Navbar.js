// ...existing code...
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">MediConnect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>

        {isLoggedIn && <Link to="/appointment">Appointment</Link>}

        {!isLoggedIn && <Link to="/login">Login</Link>}

        {!isAdmin && <Link to="/admin-login">Admin Login</Link>}

        {isAdmin && <Link to="/admin">Admin</Link>}

        {(isLoggedIn || isAdmin) && (
          <button className="nav-btn" onClick={handleLogout}>
            Logout
          </button>
        )}

        <button
          className="nav-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
// ...existing code...