import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './privateRoute';
import Home from '../components/home/home';
import Login from '../components/login/login';
import Register from '../components/register/register';
import Partners from "../components/partners/partners";
import Dashboard from '../components/dashboard/dashboard';

const RouterApp = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/partners" component={Partners} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

export default RouterApp;