import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, isLoading, admin } = useAuth()

    //set is loading
    if (!admin || isLoading) {
        return <Spinner className="mt-5" animation="grow" />
    };

    return (
        // set private route
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }

        ></Route>

    );
};

export default AdminRoute;