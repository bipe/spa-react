import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './pages/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />


        {/* ultima rota deve ser a 404 */}
        <Route path="*" component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
