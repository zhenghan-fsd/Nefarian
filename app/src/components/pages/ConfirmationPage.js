import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { userConfirmEmailRequest } from '../../actionCreators/userActionCreator';

class ConfirmationPage extends Component {
  state = {
    loading: true,
    errors: this.props.errors
  };

  componentDidMount() {
    this.props.userConfirmEmailRequest(this.props.match.params.token);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors,
      loading: false
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading && (
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Confirming Your Account</h4>
            <p>Please wait...</p>
          </div>
        )}

        {!loading &&
          !_.has(this.state.errors, 'global') && (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Account Confirmed</h4>
              <p>Your account has been confirmed.</p>
              <p>
                <Link to="/dashboard">Go To Dashboard</Link>
              </p>
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
  return {
    errors: state.apiError.confirm
  };
}

ConfirmationPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  errors: PropTypes.shape({
    global: PropTypes.string
  }),
  userConfirmEmailRequest: PropTypes.func.isRequired
};

ConfirmationPage.defaultProps = {
  errors: {}
};

export default connect(
  mapStateToProps,
  { userConfirmEmailRequest }
)(ConfirmationPage);
