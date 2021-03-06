import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NavigationPage from './Components/NavigationPage';
import NotFound from './Components/NotFound';
import Pokemons from './Components/Pokemons';
import Digimons from './Components/Digimons';

const App = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <NavigationPage /> 
            </Route>
            <Route path="/pokemon">
                <Pokemons />
            </Route>
            <Route path="/digimon">
                <Digimons />
            </Route>
            <Route exact path="/404">
                <NotFound />
            </Route>
            <Redirect to="/404"/>
        </Switch>
    </BrowserRouter>
    )
}

export default App;