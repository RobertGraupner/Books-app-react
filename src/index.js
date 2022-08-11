import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, ReactReduxContext } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector('#root')
);