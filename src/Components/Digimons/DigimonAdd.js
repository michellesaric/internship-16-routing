import React, { useState } from 'react';
import { createDigimon } from '../../data';
import { Redirect } from 'react-router-dom';
import DigimonForm from './DigimonForm';

const DigimonAdd = () =>  {
    const [isCreated, setIsCreated] = useState(false);

    const handleCreateDigimon = (digimon) => {
        createDigimon(digimon).then(() => setIsCreated(true));
    }

    if(isCreated) {
        return <Redirect to="/digimon"/>
    }

    return <DigimonForm onSubmit={handleCreateDigimon} />
}


export default DigimonAdd;