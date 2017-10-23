import React from 'react';
import { App } from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Board } from './Board';
import { Login } from './Login';
const routes = (
<BrowserRouter>
    <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} /> 
    </div>
</BrowserRouter>
);

export default routes;