import React from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth()
    return (
        <div className="container mt-5">
            <Alert variant='success' className="p-5">
                <h1>Hello, {user.displayName}</h1>
            </Alert>
        </div>
    );
};

export default DashBoardHome;