import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { userVerifyResetPasswordRequest } from '../../actionCreators/userActionCreator';

class VerifyResetPasswordPage extends Component {
  state = {
    loading: true,
    errors: {}
  };

  componentDidMount() {
    this.props.userVerifyResetPasswordRequest(this.props.match.params.token);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors, loading: false });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading && (
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Verifing Your Token</h4>
            <p>Please wait...</p>
          </div>
        )}

        {!loading &&
          _.has(this.state.errors, 'global') && (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Confirm Error</h4>
              <p>{this.state.errors.global}</p>
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errors: state.apiError.verifyResetPassword };
}

VerifyResetPasswordPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  errors: PropTypes.shape({
    global: PropTypes.string
  }),
  userVerifyResetPasswordRequest: PropTypes.func.isRequired
};

VerifyResetPasswordPage.defaultProps = {
  errors: {}
};

export default connect(
  mapStateToProps,
  { userVerifyResetPasswordRequest }
)(VerifyResetPasswordPage);
