import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import FloatingPikachu from '../../Assets/FloatingPikachu.png';
import { fetchPokemons } from '../../data';

import '../../Styling/pokemonList.css';


const PokemonList = () =>  {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        fetchPokemons().then(setPokemons);
    }, []);

    if(!pokemons) {
        return <Loading />;
    }

    return ( 
    <div className = "pokemon__list">
        <nav className = "pokemon__list-nav-bar">
            <div className = "pokemon__list-nav-bar-container">
                <div> 
                    <p className = "pokemon__list-nav-bar-text">Would you like to add a new pokemon?</p>
                    <Link to="/pokemon/add">
                        <button className = "pokemon__list-nav-bar-button">Add a new Pokemon!</button>
                    </Link>
                </div>
                <img src= {FloatingPikachu} alt = "floating pikachu" className = "pokemon__list-nav-bar-image"/>
            </div>
            <hr className = "devider" />
        </nav>
        <div className = "pokemon__list-display">
            {pokemons.map((pokemon) => (
        <div key={pokemon.id} className = "pokemon__list-display-details">
            <Link className = "wrapper" to={`/pokemon/${pokemon.id}`}>
                <h3>Pokedex.{pokemon.id}</h3>
                <h2>{pokemon.name}</h2>
                <p>{pokemon.description}</p>
            </Link>
        </div>))}
        </div>
    </div>
    )
}


export default PokemonList;