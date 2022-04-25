import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import { initialAxios } from './server/base/initialAxios';
import reduxThunk from 'redux-thunk'
import './assets/scss/main.scss';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { applyMiddleware, compose, createStore } from 'redux';

initialAxios();

const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState={}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer,initialState,compose(applyMiddleware(reduxThunk),composeEnhancers()))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

