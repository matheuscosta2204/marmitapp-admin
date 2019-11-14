import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';

import './App.css';
import Toolbar from './components/ui/toolbar/toolbar';
import Alert from './components/ui/alert';
import reducer from './reducers';
import middleware from './middleware';
import Routes from './router/router';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authedUser';

const store = createStore(reducer, middleware);

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Container className="container">
        <Toolbar />
        <Alert />
        <Router>
          <Routes />
        </Router>
      </Container>
    </Provider>
  );
}

export default App;