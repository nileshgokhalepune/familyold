import React from 'react';
import { App } from './components/App/App';
import { NotFound } from './components/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const routes = (
<BrowserRouter>
    <div>
        <Switch>
        <Route exact path="/" component={App} /> 
        <Route  component={NotFound} />
        </Switch>
    </div>
</BrowserRouter>
);

export default routes;