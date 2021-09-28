import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

export default function PokemonCatcher({ capture }) {
  const [pokemonNumber, setPokemonNumber] = useState(null);

  useEffect(() => {
    setPokemonNumber(Math.floor(Math.random() * 898))
  }, [])

  return (
    <section>
      <h1>Pokemon Catcher</h1>
      <input type="text" onChange={(e) => setPokemonNumber(e.target.value)} />
      <Pokemon selection={pokemonNumber} />
      <button onClick={() => capture(pokemonNumber)}>Catch</button>
    </section>
  );
}
