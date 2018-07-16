import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actionCreators/userActionCreator';

class SignupPage extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: ''
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
    this.props.userSignupRequest(this.state.data);
  };

  render() {
    const { username, email, password } = this.state.data;
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputusername">User Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputusername"
                aria-describedby="emailHelp"
                placeholder="User Name"
                name="username"
                onChange={this.onTextFieldChange}
                value={username}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={this.onTextFieldChange}
                value={email}
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
                name="password"
                onChange={this.onTextFieldChange}
                value={password}
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

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSignupRequest }
)(SignupPage);
