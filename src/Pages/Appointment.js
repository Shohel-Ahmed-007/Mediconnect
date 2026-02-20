import React, { useState } from "react";
import doctorsData from "../Data/doctors";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    date: "",
    time: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.doctor ||
      !formData.date ||
      !formData.time
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    // Save appointment in localStorage
    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(formData);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    setMessage("Appointment booked successfully!");

    setFormData({
      name: "",
      email: "",
      doctor: "",
      date: "",
      time: ""
    });
  };

  return (
    <div className="container">
      <h1>Book an Appointment</h1>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Doctor</option>
          {doctorsData.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name} - {doc.specialization}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input"
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" className="btn">
          Book Appointment
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Appointment;
