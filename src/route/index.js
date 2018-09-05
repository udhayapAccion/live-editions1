import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../modules/workforce/containers/';
import Others from '../modules/studygroup/containers/Others';
import About from '../modules/signin/containers/About';
import contact from '../modules/workforce/containers/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/marketplace" component={Home} />
    <Route path="/studygroup" component={About} />
    <Route path="/workforce" component={contact} />
    <Route path="/signin" component={Others} />
  </Switch>
);

export default Routes;

