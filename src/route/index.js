import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home,About,Others} from '../modules';
import contact from '../modules/contact/containers/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={contact} />
    <Route path="/others" component={Others} />
  </Switch>
);

export default Routes;
