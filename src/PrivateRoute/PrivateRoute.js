import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useFirebase();
    if (isloading) {
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            >
            </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;