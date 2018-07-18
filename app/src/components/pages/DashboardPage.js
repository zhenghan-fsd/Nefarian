import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DashboardPage = ({ isConfirmed }) => {
  return (
    <div>
      {!isConfirmed && (
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>Please verify your email.</p>
        </div>
      )}
    </div>
  );
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
