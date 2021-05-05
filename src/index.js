import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Add redux store
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//import all reducers for this store
import qFormReducers from './reducers';

//create store and give reducers
const store = createStore(
  qFormReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
