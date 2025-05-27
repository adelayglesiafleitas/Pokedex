import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PokemonBasic = {
  name: string;
  url: string;
};

function HomePage() {
  const [pokemonList, setPokemonList] = useState<PokemonBasic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Pokédex</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
        {pokemonList.map((pokemon, index) => (
          <Link to={`/pokemon/${index + 1}`} key={pokemon.name}>
            <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
              <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
              <p>#{String(index + 1).padStart(3, '0')}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
