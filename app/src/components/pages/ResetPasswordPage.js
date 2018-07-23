import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { userResetPasswordRequest } from '../../actionCreators/userActionCreator';

class ResetPasswordPage extends Component {
  state = {
    data: {
      password: '',
      confirmPassword: '',
      token: this.props.match.params.token
    },
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  onTextFieldChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const errors = this.formFiledValidate();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.props.userResetPasswordRequest(this.state.data);
  };

  formFiledValidate = () => {
    const errors = {};

    if (this.state.data.password === '') {
      errors.password = 'Can not be blank.';
    }

    if (this.state.data.password !== this.state.data.confirmPassword) {
      errors.confirmPassword = 'Password not match.';
    }

    return errors;
  };

  render() {
    const { password, confirmPassword } = this.state.data;

    return (
      <div>
        {_.has(this.state.errors, 'global') && (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Confirm Error</h4>
            <p>{this.state.errors.global}</p>
          </div>
        )}
        {!_.has(this.state.errors, 'global') && (
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className={
                      this.state.errors.password
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onTextFieldChange}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.password}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Confirm Password</label>
                  <input
                    type="password"
                    className={
                      this.state.errors.confirmPassword
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    id="exampleInputConfirmPassword1"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.onTextFieldChange}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.confirmPassword}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.apiError.resetPassword
  };
}

ResetPasswordPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  errors: PropTypes.shape({
    global: PropTypes.string
  }),
  userResetPasswordRequest: PropTypes.func.isRequired
};

ResetPasswordPage.defaultProps = {
  errors: {}
};

export default connect(
  mapStateToProps,
  { userResetPasswordRequest }
)(ResetPasswordPage);
