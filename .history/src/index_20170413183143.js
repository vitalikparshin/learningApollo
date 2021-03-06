import './index.css';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { combineReducers, createStore } from 'redux';

import { ApolloProvider } from 'react-apollo';
import ComponentWithData from './components/PostList';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});
const client = new ApolloClient({ networkInterface: networkInterface});



const store = createStore(
  combineReducers(Object.assign(reducers, {
    apollo: client.reducer(),
  })),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <ApolloProvider client={client} store={store}>
      <ComponentWithData dataEmail='artem@serga.name' />
  </ApolloProvider>,
  document.getElementById('root')
);
