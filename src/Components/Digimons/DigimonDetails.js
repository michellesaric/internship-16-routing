import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { useParams } from 'react-router';
import { fetchDigimonDetails } from '../../data';
import { Redirect, Link } from 'react-router-dom';
import '../../Styling/digimonDetails.css';

const DigimonDetails = () => {
    const params = useParams();
    const [digimon, setDigimon] = useState(null);
    const [areDigimonsFetched, setAreDigimonsFetched] = useState(false);

    useEffect(() => {
        fetchDigimonDetails(params.id).then((digimon) => {
            setDigimon(digimon);
            setAreDigimonsFetched(true);
        });
    }, []);

    if(!digimon?.id && areDigimonsFetched) {
        return <Redirect to="/404" />
    }

    if(!digimon) {
        return <Loading />
    }
    return ( 
        <div className = "digimon__details">
            <div className = "digimon__details-container">
                <h2>Digidex: {digimon.id}</h2>
                <h3>Name: {digimon.name}</h3>
                <p>Description: {digimon.description}</p>
                <div className = "digimon__details-button-container">
                    <Link to={`/digimon/edit/${digimon.id}`}>
                        <button>Update</button>
                    </Link>
                    <Link to={`/digimon/delete/${digimon.id}`}>
                        <button>Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DigimonDetails;