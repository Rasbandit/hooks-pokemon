import {useState} from 'react'

export default function usePokemonTeam(initial) {
  const [caughtPokemon, setCaughtPokemon] = useState(initial);

  const catchPokemon = (pokemonNumber) => {
    if(caughtPokemon.length >= 6) return
    if(caughtPokemon.some(item => item === pokemonNumber)) return
    setCaughtPokemon([...caughtPokemon, pokemonNumber])
  }

  const releasePokemon = (pokemonNumber) => {
    const newList = caughtPokemon.filter(item => item !== pokemonNumber)
    setCaughtPokemon(newList)
  }

  return [caughtPokemon, catchPokemon, releasePokemon]
}
