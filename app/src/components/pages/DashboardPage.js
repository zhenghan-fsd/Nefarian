import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailPage from './ConfirmEmailPage';

const DashboardPage = ({ isConfirmed }) => {
  return <div>{!isConfirmed && <ConfirmEmailPage />}</div>;
};

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
