import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/partials/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div>
    <Header />
    <div className="container">
      <GuestRoute
        location={location}
        exact
        path="/login"
        component={LoginPage}
      />
      <GuestRoute
        location={location}
        exact
        path="/signup"
        component={SignupPage}
      />
      <UserRoute
        location={location}
        exact
        path="/dashboard"
        component={DashboardPage}
      />
      <Route
        location={location}
        exact
        path="/confirmation/:token"
        component={ConfirmationPage}
      />
      <Route location={location} exact path="/" component={HomePage} />
    </div>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
