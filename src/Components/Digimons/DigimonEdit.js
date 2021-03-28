import React, { useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchDigimonDetails, updateDigimon } from '../../data';
import Loading from '../Loading';
import DigimonForm from './DigimonForm';


const DigimonEdit = () =>  {
    const params = useParams();
    const [digimon, setDigimon] = useState(null);
    const [isDigimonFetched, setIsDigimonFetched] = useState(false);
    const [isDigimonUpdated, setIsDigimonUpdated] = useState(false);

    useEffect(() => {
        fetchDigimonDetails(params.id).then((digimon) => {
            setDigimon(digimon);
            setIsDigimonFetched(true);
        });

    }, []);

    const handleUpdateDigimon = (digimon) => {
        updateDigimon(digimon).then(() => setIsDigimonUpdated(true));
    }

    if(isDigimonUpdated) {
        return <Redirect to="/digimon" />
    }

    if(!digimon?.id && isDigimonFetched) {
        return <Redirect to="/404" />
    }

    if(!digimon) {
        return <Loading />
    }
    return <DigimonForm digimon={digimon} onSubmit={handleUpdateDigimon}/>
}


export default DigimonEdit;