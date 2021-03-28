import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { fetchDigimons } from '../../data';
import cuteDigimon from '../../Assets/angelDigimon.png';
import '../../Styling/digimonList.css';


const DigimonList = () =>  {
    const [digimons, setDigimons] = useState(null);

    useEffect(() => {
        fetchDigimons().then(setDigimons);
    }, []);

    if(!digimons) {
        return <Loading />;
    }

    return ( 
    <div className = "digimon__list">
        <nav className = "digimon__list-nav-bar">
            <div className = "digimon__list-nav-bar-container">
                <img src = {cuteDigimon} alt = "cute digimon" className="digimon__list-nav-bar-image"/>
                <div> 
                    <p className = "digimon__list-nav-bar-text">Would you like to add a new digimon?</p>
                    <Link to="/digimon/add">
                        <button className = "digimon__list-nav-bar-button">Add a new Digimon!</button>
                    </Link>
                </div>
            </div>
            <hr className = "devider" />
        </nav>
        <div className = "digimon__list-display">
            {digimons.map((digimon) => (
        <div key={digimon.id} className = "digimon__list-display-details">
            <Link className = "digimon__list-display-details-wrapper" to={`/digimon/${digimon.id}`}>
                <h3>Digidex.{digimon.id}</h3>
                <h2>{digimon.name}</h2>
                <p>{digimon.description}</p>
            </Link>
        </div>))}
        </div>
    </div>
    )
}


export default DigimonList;