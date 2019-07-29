import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NoPage from '../pages/NoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route component={NoPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
