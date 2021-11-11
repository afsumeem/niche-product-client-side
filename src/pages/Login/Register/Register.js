import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    // import functions useFirebase hook
    const { getUserEmail, getUserPassword, handleRegistration, name, email, error, getUserName, saveUser, setUsers, setError, verifyEmail, setUserName } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    return (
        <div>
            {/* signup form container */}

            <div className="form-container w-50 p-5 mx-auto bg-dark bg-opacity-50">
                <h2 className="pt-5 text-uppercase text-white fw-bolder">Create an Account</h2>

                <Form onSubmit={(e) => {
                    e.preventDefault();

                    handleRegistration()
                        .then((result) => {

                            const user = result.user;

                            user.email = email;
                            user.displayName = name;

                            setUsers(user)
                            history.push(redirect_uri);

                            verifyEmail();
                            setUserName();


                            //save user to database
                            saveUser(user.displayName, user.email, 'POST');

                        })
                        .catch((error) => {
                            setError(error.message)
                        })
                }}

                    className="w-75 mx-auto pt-5">
                    <div className="row mb-3 text-danger">{error}</div>


                    {/* sign up form inputgroups */}

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3 "
                    >
                        <Form.Control onBlur={getUserName} type="text" placeholder="Mark otto" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onBlur={getUserEmail} type="email" placeholder="abc@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                    </FloatingLabel>

                    {/* signup button */}
                    <Button className="w-100 mt-3 bg-info text-dark fw-bolder" type="submit">Sign up</Button>

                </Form>


                <p className="ms-3 mt-3 text-white fw-bolder">Already have an account ? </ p>

                {/* login page path */}
                <NavLink to="/login" className="btn rounded btn-primary">Sign in </NavLink>

            </div>
        </div>
    );
};

export default Register;
