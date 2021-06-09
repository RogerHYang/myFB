import React from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Modal from "./modal/modal";
import SignUpPageContainer from "./session_form/signup_page_container";
import LogInPageContainer from "./session_form/login_page_container";

import Home from "./users/home";
import Profile from "./users/profile";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCamera,
  faSignOutAlt,
  faCaretDown,
  faGlobeAmericas,
  faGraduationCap,
  faBriefcase,
  faPencilAlt,
  faTimes,
  faUserCheck,
  faUserPlus,
  faUserTimes,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCamera,
  faSignOutAlt,
  faCaretDown,
  faGlobeAmericas,
  faGraduationCap,
  faBriefcase,
  faPencilAlt,
  faTimes,
  faUserCheck,
  faUserPlus,
  faUserTimes,
  faUserClock
);

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/home" component={Home} />
      <Redirect exact from="/users/:userId/" to="/users/:userId/posts" />
      <Route exact path="/users/:userId/:section" component={Profile} />
      <AuthRoute exact path="/login" component={LogInPageContainer} />
      <AuthRoute exact path="/signup" component={SignUpPageContainer} />
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  </div>
);

export default App;
