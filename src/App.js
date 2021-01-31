import React, { useState } from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './pages/users/users.js';
import Login from './pages/login/login.js';
import EditUser from './pages/editUser/editUser.js';
import NotFound from './pages/notFound/notFound.js';

import './styles/global.css'
import './styles/App.css'
import './styles/Main.css'

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {token ? <Redirect to="/users" /> : <Route path="/" exact={true} component={Login} />}
        </Route>

        <Route exact path="/login">
          {token ? <Redirect to="/users" /> : <Route path="/" exact={true} component={Login} />}
        </Route>
        
        <Route path="/users" exact={true} component={Users} />
        <Route path="/users/:id" component={EditUser} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
