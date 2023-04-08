import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, addPokemonData] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPokemonData(pokemon);
    setPokemon("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon:
          <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      {pokemonData.map((data) => (
        <div key={data.id}>
          <p>{data.name}</p>
          <img src={data.sprites.front_default} alt={data.img}/>
        </div>
      ))}
    </div>
  );
}

export default PokeDex;
