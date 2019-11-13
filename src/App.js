import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducer from './reducers';
import middleware from './middleware';
import Router from './router/router';

const store = createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
}

export default App;