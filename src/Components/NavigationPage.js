import React from 'react';
import { Link } from 'react-router-dom';
import AshAndPikachu from '../Assets/Ash&Pikachu.png'
import PokemonLogo from '../Assets/Pokemon.png'
import DigimonLogo from '../Assets/digimon.png'
import TaiAndAgumon from '../Assets/Tai_Agumon.png';
import '../Styling/navigation_page.css'

const NavigationPage = () => {
    return (
        <div className = "navigation__bar"> 
            <Link className = "navigation__bar-pokemons" to="/pokemons">
                <p className = "navigation__bar-pokemons-text">Discover the magical world of <img className= "logo" src={PokemonLogo} alt="pokemonLogo"/></p>
                <img src = {AshAndPikachu} alt = "Ash and pikachu" className = "navigation__bar-pokemons-image"/>
            </Link>
            <Link className = "navigation__bar-digimons" to="/digimons">
                <img src={TaiAndAgumon} alt = "Tai and agumon" className = "navigation__bar-digimons-image"/>
                <p className = "navigation__bar-digimons-text">Or wander in the world of <img  className = "logo" src={DigimonLogo} alt = "digimonLogo"/></p>
            </Link>
        </div>
    )
}

export default NavigationPage;