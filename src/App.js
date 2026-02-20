import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";
import { revealOnScroll } from "./utils/scrollReveal";


/* =======================
   USER PROTECTED ROUTE
======================= */
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

/* =======================
   ADMIN PROTECTED ROUTE
======================= */
function AdminRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? children : <Navigate to="/admin-login" />;
}

function App() {
  /* =======================
     DARK MODE STATE
  ======================= */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Dark mode handling
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);

    // Scroll reveal animation
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* USER PROTECTED */}
        <Route
          path="/appointment"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />

        {/* ADMIN PROTECTED */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
