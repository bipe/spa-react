import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//page components
import App from './App';
import Login from './pages/login';
import EditUser from './pages/editUser';
import NotFound from './pages/notFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/users" exact={true} component={App} />
        <Route path="/users/:id" component={EditUser} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
