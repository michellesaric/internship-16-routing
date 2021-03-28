import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { useParams } from 'react-router';
import { fetchPokemonDetails } from '../../data';
import { Redirect, Link } from 'react-router-dom';

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
        <div>
            <h3>Pokedex: {pokemon.id}</h3>
            <p>Name: {pokemon.name}</p>
            <p>Description: {pokemon.description}</p>
            <Link to={`/pokemon/edit/${pokemon.id}`}>
                <button>Update</button>
            </Link>
            <Link to={`/pokemon/delete/${pokemon.id}`}>
                <button>Delete</button>
            </Link>
        </div>
    )
}

export default PokemonDetails;