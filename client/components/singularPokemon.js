import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await axios.get(`/api/Pokemon/${id}`);
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

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Trainer: {pokemon.trainer}</p>
      <img src={pokemon.image} alt={`${pokemon.name} sprite`} />

      <ul key={pokemon.Trainer.id}>
        <li>
          {pokemon.Trainer.firstName} - {pokemon.Trainer.lastName}
        </li>
        <li>
          <img src={pokemon.Trainer.image} alt={`${pokemon.Trainer.firstName}'s portrait`} />
        </li>
      </ul>
    </div>
  );
}
