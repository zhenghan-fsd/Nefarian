import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLogin ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

UserRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isLogin: !!state.user.token
  };
}

export default connect(mapStateToProps)(UserRoute);
