import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ isLogin }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Shopping Cart
          </a>
        </li>
        {isLogin ? (
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User Management
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                User Account
              </a>
              <div className="dropdown-divider" />
              <Link
                className="dropdown-item"
                to="/"
                onClick={() => {
                  localStorage.removeItem('nefarian');
                  console.log('App logout');
                }}
              >
                Logout
              </Link>
            </div>
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
        {!isLogin ? (
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLogin: !!state.user.token
  };
}

export default connect(mapStateToProps)(Header);
