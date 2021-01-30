import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './pages/users';
import Login from './pages/login';
import EditUser from './pages/editUser';
import NotFound from './pages/notFound';

import './styles/global.css'
import './styles/App.css'
import './styles/Sidebar.css'
import './styles/Main.css'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  console.log(token);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/users" exact={true} component={Users} />
        <Route path="/users/:id" component={EditUser} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
