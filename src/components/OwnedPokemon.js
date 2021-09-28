import React from 'react';
import Pokemon from './Pokemon';

export default function OwnedPokemon({ pokemon, releasePokemon }) {
  return (
    <>
      <h1>Current Team</h1>
      <ul>
        {pokemon.map((item) => (
          <li>
            <Pokemon selection={item} />
            <button onClick={() => releasePokemon(item)}>Release</button>
          </li>
        ))}
      </ul>
    </>
  );
}
