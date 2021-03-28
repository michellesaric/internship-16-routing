import React from 'react';
import { Link } from 'react-router-dom';
import cryingPokemon from '../Assets/CryingPokemon.png';
import digimon from '../Assets/cuteDigimon.png';
import '../Styling/not_found.css';


const NotFound = () => {
    return (
        <div className = "notFound">
            <div className ="notFound__container">
                <p className = "notFound__container-description">Whoops! You went to the wrong page!</p>
                <img src = {cryingPokemon} alt="crying pokemon" className = "notFound__container-image"/>
            </div>
            <div className = "notFound__container">
                <img src = {digimon} alt = "digimon"  className = "notFound__container-image"/>
                <p className = "notFound__container-description">But if you <Link to="/"><span>click here</span></Link>, I'll redirect you back!</p>
            </div>
        </div>
    )
}

export default NotFound;