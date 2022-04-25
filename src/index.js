import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import { initialAxios } from './server/base/initialAxios';
import './assets/scss/main.scss';

initialAxios();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

