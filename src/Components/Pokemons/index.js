import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonAdd from './PokemonAdd';
import PokemonEdit from './PokemonEdit';
import PokemonDetails from './PokemonDetails';
import PokemonDelete from './PokemonDelete';

const Pokemons = () => {
    return <Switch>
        <Route exact path="/pokemon">
            <PokemonList />
        </Route>
        <Route exact path="/pokemon/add">
            <PokemonAdd />
        </Route>
        <Route exact path="/pokemon/:id">
            <PokemonDetails />
        </Route>
        <Route exact path="/pokemon/edit/:id">
            <PokemonEdit />
        </Route>
        <Route exact path="/pokemon/delete/:id">
            <PokemonDelete />
        </Route>
    </Switch>
}

export default Pokemons;