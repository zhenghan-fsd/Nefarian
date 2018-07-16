import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoginRequest } from '../../actionCreators/userActionCreator';

class LoginPage extends Component {
  state = {
    data: {
      userEmail: '',
      userPassword: ''
    },
    errors: {}
  };

  onTextFieldChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.userLoginRequest(this.state.data);
  };

  render() {
    const { userEmail, userPassword } = this.state.data;
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="userEmail"
                value={userEmail}
                onChange={this.onTextFieldChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="userPassword"
                value={userPassword}
                onChange={this.onTextFieldChange}
              />
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

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { userLoginRequest }
)(LoginPage);
