import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from "./pages/PaginaInicial/PaginaInicial"
import PaginaLogin from "./pages/Login/Login"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial}/>
        <Route path="/login" component={PaginaLogin}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;