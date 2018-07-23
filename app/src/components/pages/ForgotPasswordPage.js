import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userForgotPasswordRequest } from '../../actionCreators/userActionCreator';

class ForgotPasswordPage extends Component {
  state = {
    data: {
      email: ''
    },
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.userForgotPasswordRequest(this.state.data.email);
  };

  onTextFieldChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { email } = this.state.data;

    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className={
                  this.state.errors.email
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.onTextFieldChange}
              />
              <div className="invalid-feedback">{this.state.errors.email}</div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  userForgotPasswordRequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string
  })
};

ForgotPasswordPage.defaultProps = {
  errors: {}
};

function mapStateToProps(state) {
  return {
    errors: state.apiError.forgotPassword
  };
}

export default connect(
  mapStateToProps,
  { userForgotPasswordRequest }
)(ForgotPasswordPage);
