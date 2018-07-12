import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/partials/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/" component={HomePage} />
      </div>
    </div>
  </Router>
);

export default App;
