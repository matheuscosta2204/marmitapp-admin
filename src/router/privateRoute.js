import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            !isAuthenticated && !loading ? (
                <Redirect to="/login" />
            ) : (
                <Component {...props} />
            )
        } 
    />
);

function mapStateToProps({ auth }) {
    return { auth }
};

export default connect(mapStateToProps)(PrivateRoute);