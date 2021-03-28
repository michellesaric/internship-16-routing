import React, { useState } from 'react';
import { createPokemon } from '../../data';
import { Redirect } from 'react-router-dom';
import PokemonForm from './PokemonForm';

const PokemonAdd = () =>  {
    const [isCreated, setIsCreated] = useState(false);

    const handleCreatePokemon = (pokemon) => {
        createPokemon(pokemon).then(() => setIsCreated(true));
    }

    if(isCreated) {
        return <Redirect to="/pokemon"/>
    }

    return <PokemonForm onSubmit={handleCreatePokemon} />
}


export default PokemonAdd;