import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content reveal active">
          <h1>
            Healthcare, <br /> Re-imagined Digitally
          </h1>
          <p>
            A modern healthcare management system to search doctors, book
            appointments, and manage care efficiently.
          </p>
          <Link to="/doctors">
            <button className="primary-btn">Explore Platform</button>
          </Link>
        </div>
        <div className="scroll-indicator">↓ Scroll</div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card reveal">
          <h3>Doctor Discovery</h3>
          <p>
            Search and filter expert doctors by specialization and experience.
          </p>
        </div>

        <div className="feature-card reveal">
          <h3>Appointment Booking</h3>
          <p>
            Book healthcare appointments seamlessly with real-time validation.
          </p>
        </div>

        <div className="feature-card reveal">
          <h3>Admin Management</h3>
          <p>
            Manage appointments, monitor system usage, and maintain control.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Start Your Healthcare Journey Today</h2>
        <Link to="/appointment">
          <button className="primary-btn">Book Appointment</button>
        </Link>
      </section>
    </>
  );
}

export default Home;
