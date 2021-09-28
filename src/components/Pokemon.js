import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Pokemon({ selection }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (selection) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${selection}`)
        .then(({ data }) => {
          setPokemon(data);
        });
    }
  }, [selection]);

 

  return (
    <section>
      <img src={`${pokemon?.sprites?.front_shiny || pokemon?.sprites?.front_default}`} alt="" />
      <h2>{pokemon.name}</h2>
      <p>{pokemon?.types?.map(type => type.type.name).join('/')}</p>
    </section>
  );
}
