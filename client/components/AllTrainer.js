import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function fetchTrainers() {
      try {
        const response = await axios.get("/api/trainers");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    }

    fetchTrainers();
  }, []);

  return (
    <div>
      <h1>Trainers List</h1>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            <Link to={`/trainers/${trainer.id}`}>
              {trainer.firstName} {trainer.lastName}
            </Link>{" "}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
