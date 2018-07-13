import React, { Component } from 'react';

class SignupPage extends Component {
  state = {
    data: {
      userName: '',
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
  };

  render() {
    const { userName, userEmail, userPassword } = this.state.data;
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputUserName">User Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUserName"
                aria-describedby="emailHelp"
                placeholder="User Name"
                name="userName"
                onChange={this.onTextFieldChange}
                value={userName}
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
                name="userEmail"
                onChange={this.onTextFieldChange}
                value={userEmail}
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
                onChange={this.onTextFieldChange}
                value={userPassword}
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

export default SignupPage;
