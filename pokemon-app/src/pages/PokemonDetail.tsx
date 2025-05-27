import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">⬅ Back</Link>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: #{String(pokemon.id).padStart(3, '0')}</p>

      <div>
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((t: any) => (
            <li key={t.type.name}>{t.type.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Base Stats:</h3>
        <ul>
          {pokemon.stats.map((s: any) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;
