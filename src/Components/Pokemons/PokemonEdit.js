import React, { useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchPokemonDetails, updatePokemon } from '../../data';
import Loading from '../Loading';
import PokemonForm from './PokemonForm';


const PokemonEdit = () =>  {
    const params = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [isPokemonFetched, setIsPokemonFetched] = useState(false);
    const [isPokemonUpdated, setIsPokemonUpdated] = useState(false);

    useEffect(() => {
        fetchPokemonDetails(params.id).then((pokemon) => {
            setPokemon(pokemon);
            setIsPokemonFetched(true);
        });

    }, []);

    const handleUpdatePokemon = (pokemon) => {
        updatePokemon(pokemon).then(() => setIsPokemonUpdated(true));
    }

    if(isPokemonUpdated) {
        return <Redirect to="/pokemon" />
    }

    if(!pokemon?.id && isPokemonFetched) {
        return <Redirect to="/404" />
    }

    if(!pokemon) {
        return <Loading />
    }
    return <PokemonForm pokemon={pokemon} onSubmit={handleUpdatePokemon}/>
}


export default PokemonEdit;