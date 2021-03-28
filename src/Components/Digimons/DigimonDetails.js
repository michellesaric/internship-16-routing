import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { useParams } from 'react-router';
import { fetchDigimonDetails } from '../../data';
import { Redirect, Link } from 'react-router-dom';

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
        <div>
            <h3>Digidex: {digimon.id}</h3>
            <p>Name: {digimon.name}</p>
            <p>Description: {digimon.description}</p>
            <Link to={`/digimon/edit/${digimon.id}`}>
                <button>Update</button>
            </Link>
            <Link to={`/digimon/delete/${digimon.id}`}>
                <button>Delete</button>
            </Link>
        </div>
    )
}

export default DigimonDetails;