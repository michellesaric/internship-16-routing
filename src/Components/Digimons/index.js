import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DigimonList from './DigimonList';
import DigimonAdd from './DigimonAdd';
import DigimonEdit from './DigimonEdit';
import DigimonDetails from './DigimonDetails';
import DigimonDelete from './DigimonDelete';

const Pokemons = () => {
    return <Switch>
        <Route exact path="/digimons">
            <DigimonList />
        </Route>
        <Route exact path="/digimon/add">
            <DigimonAdd />
        </Route>
        <Route exact path="/digimon/:id">
            <DigimonDetails />
        </Route>
        <Route exact path="/digimon/edit/:id">
            <DigimonEdit />
        </Route>
        <Route exact path="/digimon/delete/:id">
            <DigimonDelete />
        </Route>
    </Switch>
}

export default Pokemons;