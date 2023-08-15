import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Trainer() {
  const [trainer, setTrainer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrainerDetails() {
      try {
        const response = await axios.get(`/api/trainers/${id}`);
        setTrainer(response.data);
      } catch (error) {
        console.error("Error fetching trainer details:", error);
        setTrainer(null);
      }
    }

    fetchTrainerDetails();
  }, [id]);

  return (
    <div>
      {trainer ? (
        <div>
          <h2>{trainer.firstName}</h2>
          <img src={trainer.image} alt={`${trainer.firstName}'s portrait`} />
          <ul>
            {trainer.Pokemons.map((pokemon) => (
              <li key={pokemon.id}>
                <div>
                  {pokemon.name} - {pokemon.type} - {pokemon.trainer}
                </div>
                <div>
                  <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
