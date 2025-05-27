import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";
import { Card } from '../components/Card';
import type { PokemonBasic } from "../types/types";




function HomePage() {
  const [pokemonList, setPokemonList] = useState<PokemonBasic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='home' >

      {pokemonList.map((pokemon: PokemonBasic, index: number) => (
        <Link to={`/pokemon/${index + 1}`} key={pokemon.name}>
          <Card pokemon={pokemon} index={index} />

        </Link>
      ))}

    </div>
  );
}

export default HomePage;
