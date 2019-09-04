import React from 'react';
import { Switch } from 'react-router';
import LayoutRoute from './LayoutRoute';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout';
import * as pages from '../page';


export default () => (
  <Switch>
    <LayoutRoute exact path='/' layout={Layout} component={pages.Homepage} />
    <LayoutRoute exact path='/login' layout={Layout} component={pages.Login} />
    <LayoutRoute exact path='/users' layout={Layout} component={pages.Users} />
    <PrivateRoute exact path='/profile' layout={Layout} component={pages.Profile} />
  </Switch>
)