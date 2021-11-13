import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/404.jpeg';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img src={notFound} alt="" className="pt-5 w-75" />
            <NavLink to="/home" className="mx-auto w-75 btn btn-primary py-3 rounded-0 fs-4 fw-bolder">
                GO BACK HOME <FontAwesomeIcon className="fs-4 me-2" icon={faArrowRight} />
            </NavLink>
        </div>
    );
};

export default NotFound;