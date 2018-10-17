import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userLoginRequest } from '../../actionCreators/userActionCreator';

class LoginPage extends Component {
  state = {
    data: {
      email: '',
      password: ''
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
    this.props.userLoginRequest(this.state.data);
  };

  render() {
    const { email, password } = this.state.data;
    return (
      <div className="container" style={{ height: '100vh' }}>
        <div className="row align-items-center" style={{ height: '100vh' }}>
          <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
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
                    <div className="invalid-feedback">
                      {this.state.errors.email}
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <br />
                  <Link to="/forgot_password">Forgot Password</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
};

LoginPage.defaultProps = {
  errors: {}
};

function mapStateToProps(state) {
  return { errors: state.apiError.login };
}

export default connect(
  mapStateToProps,
  { userLoginRequest }
)(LoginPage);
