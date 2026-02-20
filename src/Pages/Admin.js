import React, { useEffect, useState } from "react";

function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Appointments</h3>
          <p>{appointments.length}</p>
        </div>
      </div>

      <h2>All Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((app, index) => (
          <div className="admin-card" key={index}>
            <p><strong>Name:</strong> {app.name}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Doctor:</strong> {app.doctor}</p>
            <p><strong>Date:</strong> {app.date}</p>
            <p><strong>Time:</strong> {app.time}</p>

            <button
              className="btn"
              onClick={() => deleteAppointment(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
