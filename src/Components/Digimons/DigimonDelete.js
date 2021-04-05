import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { deleteDigimon } from '../../data';
import { Redirect } from 'react-router-dom';


const DigimonDelete = () =>  {
    const params = useParams();
    const [isDigimonDeleted, setIsDigimonDeleted] = useState(false);

    useEffect(() => {
        deleteDigimon(params.id).then(setIsDigimonDeleted(true));
    }, []);

    if(isDigimonDeleted) {
        return <Redirect to="/digimon" />
    }

    if(!params?.id && isDigimonDeleted) {
        return <Redirect to="/404" />
    }

    return null;
}


export default DigimonDelete;