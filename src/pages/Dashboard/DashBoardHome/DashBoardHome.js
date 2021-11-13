import React from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth()
    return (
        <div className="container mt-5">
            <Alert variant='success' className="p-5 text-start">
                <h1 className="mb-5">Hello, {user.displayName}</h1>
                <h5>
                    "Welcome to Fragrance Shop! The Fragrance Shop is a London based Perfume brand.Each piece in our collection has been meticulously designed in our studio near London Bridge!"
                </h5>
            </Alert>
        </div>
    );
};

export default DashBoardHome;