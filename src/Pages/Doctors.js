import React, { useState } from "react";
import doctorsData from "../Data/doctors";
import DoctorCard from "../Components/DoctorCard";

function Doctors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || doctor.specialization === filter)
    );
  });

  return (
    <div className="container">
      <h1>Our Doctors</h1>

      <div className="search-box">
  <input
    type="text"
    placeholder="Search doctor by name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="input"
  />

  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="input"
  >
    <option value="">All Specializations</option>
    <option value="Cardiologist">Cardiologist</option>
    <option value="Dentist">Dentist</option>
    <option value="Dermatologist">Dermatologist</option>
    <option value="Neurologist">Neurologist</option>
  </select>
</div>


      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
