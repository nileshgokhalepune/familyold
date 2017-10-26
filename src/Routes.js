import React from 'react';
import { App } from './App';
import { BrowserRouter, Route } from 'react-router-dom';
const routes = (
<BrowserRouter>
    <div>
        <Route path="/" component={App} /> 
    </div>
</BrowserRouter>
);

export default routes;