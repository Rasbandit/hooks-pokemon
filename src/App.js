import { useState } from 'react';

import 'normalize.css'

import './App.css';
import PokemonCatcher from './components/PokemonCatcher';
import OwnedPokemon from './components/OwnedPokemon';
import usePokemonTeam from './hooks/usePokemonTeam';

function App() {
  const [caughtPokemon, catchPokemon, releasePokemon] = usePokemonTeam([1,2,3,4]);

  return (
    <div className="App">
      <OwnedPokemon pokemon={caughtPokemon} releasePokemon={releasePokemon}/>
      <PokemonCatcher capture={catchPokemon} />
    </div>
  );
}

export default App;
