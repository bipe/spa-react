import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/notFound/index';

const Routes = () => (
    <BrowserRouter>
    <Switch>
{/*         <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Main} />
        <Route path="/users/:id" component={User} /> */}
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
);

export default Routes;