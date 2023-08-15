import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await axios.get(`/api/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    }

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, type, Trainer } = pokemon;

  return (
    <div>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Trainer: {Trainer.firstName} {Trainer.lastName}</p>
      <img src={pokemon.image} alt={`${name} sprite`} />

      <ul key={Trainer.id}>
        <li>
          {Trainer.firstName} - {Trainer.lastName}
        </li>
        <li>
          <img src={Trainer.image} alt={`${Trainer.firstName}'s portrait`} />
        </li>
      </ul>
    </div>
  );
}
