import React from 'react'
import type { CardProps } from "../types/types";
import "../styles/Card.css";



export const Card: React.FC<CardProps> = ({ pokemon, index }) => {
    return (
        <div className='card' >
            <div className='card-image'>

                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}
                />
            </div>

            <div className='card-content'>
                <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            </div>


        </div>
    )
}
