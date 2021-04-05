import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { deletePokemon } from '../../data';
import { Redirect } from 'react-router-dom';

const PokemonDelete = () =>  {
    const params = useParams();
    const [isPokemonDeleted, setIsPokemonDeleted] = useState(false);

    useEffect(() => {
        deletePokemon(params.id).then(setIsPokemonDeleted(true));
    }, []);

    if(isPokemonDeleted) {
        return <Redirect to="/pokemon" />
    }

    if(!params?.id && isPokemonDeleted) {
        return <Redirect to="/404" />
    }

    return null;
}


export default PokemonDelete;