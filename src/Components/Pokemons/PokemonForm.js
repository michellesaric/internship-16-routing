import React, { useState } from 'react';
import '../../Styling/pokemonForm.css';


const PokemonForm = ({ onSubmit, pokemon }) =>  {
    const [name, setName] = useState(pokemon?.name || "");
    const [description, setDescription] = useState(pokemon?.description || "");

    const handleChange = (handler) => (event) =>  {
        handler(event.target.value);
    }

    const handleSubmit = () => {
        if(!(name && description)) {
            return;
        }

        const pokemonToSubmit = pokemon ? {...pokemon, name, description} : {name, description};

        onSubmit(pokemonToSubmit);
    }

    return ( 
    <div className = "pokemon__form">
        <div className = "pokemon__form-container">
            <label>Enter a new name for your pokemon:</label>
            <input value={name} onChange={handleChange(setName)} />
            <label>Give your new pokemon some description:</label>
            <input value={description} onChange={handleChange(setDescription)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    )
}


export default PokemonForm;