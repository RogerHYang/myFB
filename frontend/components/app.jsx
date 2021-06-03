import React from 'react';
import { Switch, Link } from 'react-router-dom';

import SignUpPageContainer from './session_form/signup_page_container';
import LogInPageContainer from './session_form/login_page_container';
import HomePageContainer from './users/home_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={HomePageContainer} />
      <AuthRoute exact path="/login" component={LogInPageContainer} />
      <AuthRoute exact path="/signup" component={SignUpPageContainer} />
    </Switch>
  </div>
);

export default App;
