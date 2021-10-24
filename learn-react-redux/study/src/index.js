import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '../src/pages/store/index';
 //import  StoreContext  from './utils/context';
 import { Provider } from 'react-redux';
 ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);



/* ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>,
  document.getElementById('root')
);
 */