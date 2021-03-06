import './index.css';

import { ApolloClient } from 'react-apollo';
import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);



ReactDOM.render(
  
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
