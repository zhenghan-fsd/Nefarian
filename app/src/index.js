import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from 'react-router-dom';
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
  store.dispatch(userLoginSuccess({ token: localStorage.nefarian }));
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
