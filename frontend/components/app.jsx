import React from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import SignUpPageContainer from './session_form/signup_page_container';
import LogInPageContainer from './session_form/login_page_container';
import HomePageContainer from './users/home_page_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/users/:userId" component={HomePageContainer} />
      <AuthRoute exact path="/login" component={LogInPageContainer} />
      <AuthRoute exact path="/signup" component={SignUpPageContainer} />
      <Route><Redirect to="/" /></Route>
    </Switch>
  </div>
);

export default App;
