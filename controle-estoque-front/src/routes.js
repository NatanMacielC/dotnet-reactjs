import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './vendaproduto'
import App from './cadastroproduto'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route> path="/" component={Main}</Route>
                <Route> path="/cadastro" component={App}</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;