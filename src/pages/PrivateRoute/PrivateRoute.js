import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()

    //set is loading
    if (isLoading) {
        return <Spinner className="mt-5" animation="grow" />
    };

    return (
        // set private route
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }

        ></Route>
    );
};

export default PrivateRoute;