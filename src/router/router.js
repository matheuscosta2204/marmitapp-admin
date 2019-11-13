import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../components/home/home';
import Login from '../components/login/login';
import Register from '../components/register/register';
import Partners from "../components/partners/partners";

const RouterApp = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/partners">
                <Partners />
            </Route>
            </Switch>
        </Router>
    )
}

export default RouterApp;