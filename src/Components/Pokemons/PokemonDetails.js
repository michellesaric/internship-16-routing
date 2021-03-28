import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { useParams } from 'react-router';
import { fetchPokemonDetails } from '../../data';
import { Redirect, Link } from 'react-router-dom';
import '../../Styling/pokemonDetails.css';

const PokemonDetails = () => {
    const params = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [arePokemonsFetched, setArePokemonsFetched] = useState(false);

    useEffect(() => {
        fetchPokemonDetails(params.id).then((pokemon) => {
            setPokemon(pokemon);
            setArePokemonsFetched(true);
        });
    }, []);

    if(!pokemon?.id && arePokemonsFetched) {
        return <Redirect to="/404" />
    }

    if(!pokemon) {
        return <Loading />
    }
    return ( 
        <div className = "pokemon__details">
            <div className = "pokemon__details-container">
                <h2>Pokedex: {pokemon.id}</h2>
                <h3>Name: {pokemon.name}</h3>
                <p>Description: {pokemon.description}</p>
                <div className = "pokemon__details-button-container">
                    <Link to={`/pokemon/edit/${pokemon.id}`}>
                        <button>Update</button>
                    </Link>
                    <Link to={`/pokemon/delete/${pokemon.id}`}>
                        <button>Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails;