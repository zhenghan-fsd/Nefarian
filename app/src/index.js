import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import user from './reducers/userRecuder';
import apiError from './reducers/apiErrorReducer';
import rootSaga from './sagas/rootSaga';
import { userLoginSuccess } from './actionCreators/userActionCreator';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  combineReducers({ user, apiError }),
  // applyMiddleware(sagaMiddleware)
  enhancer
);
sagaMiddleware.run(rootSaga);

if (localStorage.nefarian) {
  const payload = decode(localStorage.nefarian);
  store.dispatch(
    userLoginSuccess({
      token: localStorage.nefarian,
      confirmed: payload.confirmed,
      email: payload.email,
      username: payload.username
    })
  );
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
