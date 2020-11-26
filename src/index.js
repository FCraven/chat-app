import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addUser } from './redux/actions'
import setupSocket from './sockets'
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()


//RESTART AT 1:11

import chat from './redux/reducers';

const store = createStore(chat);
store.dispatch(addUser('Me'))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
