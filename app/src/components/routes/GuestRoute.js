import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const GuestRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLogin ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

GuestRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isLogin: !!state.user.token
  };
}

export default connect(mapStateToProps)(GuestRoute);
