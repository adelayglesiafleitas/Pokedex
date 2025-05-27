import React from 'react'
import type { PokemonBasic } from "../types/types";

type CardProps = {
    pokemon: PokemonBasic;
    index: number;
};

export const Card: React.FC<CardProps> = ({ pokemon, index }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
            />
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <p>#{String(index + 1).padStart(3, '0')}</p>
        </div>
    )
}
