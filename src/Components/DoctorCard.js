import React from "react";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img
        src={`https://randomuser.me/api/portraits/men/${doctor.id + 10}.jpg`}
        alt="doctor"
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience} years experience</p>
    </div>
  );
}

export default DoctorCard;
