import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";
import { Card } from '../components/Card';
import type { PokemonBasic } from "../types/types";

function HomePage() {
  const [pokemonList, setPokemonList] = useState<PokemonBasic[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1302')
      .then(res => res.json())
      .then(data => {
        setPokemonList(data.results);
        setLoading(false);
      });
  }, []);

  const displayedPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className='home'>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {displayedPokemon.length === 0 && (
        <p>No se encontró ningún Pokémon</p>
      )}

      <div className='pokemon-list'>
        {displayedPokemon.map(pokemon => {
          const index = pokemonList.findIndex(p => p.name === pokemon.name);
          return (
            <Link to={`/pokemon/${index + 1}`} key={pokemon.name}>
              <Card pokemon={pokemon} index={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
