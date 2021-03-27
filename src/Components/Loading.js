import React from 'react';
import Pikachu from '../Assets/CutePikachu.png'
import "../Styling/loading.css"


const Loading = () => {
    return (
        <div className="loading__container">
            <h3>Loading</h3>
            <img src={Pikachu} alt="Pikachu" className="loading__container-image"/>
            <div className="loading__container-loader"></div>
        </div>
    )
}

export default Loading;