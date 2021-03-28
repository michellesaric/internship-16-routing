import React, { useState } from 'react';
import '../../Styling/digimonForm.css';


const DigimonForm = ({ onSubmit, digimon }) =>  {
    const [name, setName] = useState(digimon?.name || "");
    const [description, setDescription] = useState(digimon?.description || "");

    const handleChange = (handler) => (event) =>  {
        handler(event.target.value);
    }

    const handleSubmit = () => {
        if(!(name && description)) {
            return;
        }

        const digimonToSubmit = digimon ? {...digimon, name, description} : {name, description};

        onSubmit(digimonToSubmit);
    }

    return ( 
    <div className = "digimon__form">
        <div className = "digimon__form-container">
            <label>Enter a new name for your digimon:</label>
            <input value={name} onChange={handleChange(setName)} />
            <label>Give your new digimon some description:</label>
            <input value={description} onChange={handleChange(setDescription)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    )
}


export default DigimonForm;