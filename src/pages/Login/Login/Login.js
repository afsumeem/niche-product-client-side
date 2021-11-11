import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, handleResetPassword, saveUser, getUserEmail, getUserPassword, setUsers, setError, userLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //handle google sign in button
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                setUsers(user)
                history.push(redirect_uri);

                //save user to database
                saveUser(user.displayName, user.email, 'PUT')
            })
            .catch((error) => {
                setError(error.message)
            })
    };

    //handle sign in using email and password
    const userLoginWithEmailPass = (e) => {
        e.preventDefault();
        userLogin()
            .then((result) => {
                setUsers(result.user)
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err.message)
            })
    };

    return (
        <div className="login-container" >
            <div className="container">

                {/* login form section */}
                <div className="form-container w-50 p-5 mx-auto bg-white bg-opacity-50">

                    <Form onSubmit={userLoginWithEmailPass}

                        className="w-100 mx-auto pt-3">

                        {/* login form design */}
                        <h2 className="pt-5 text-uppercase fw-bolder">Welcome back!</h2>
                        <p className="fw-bold mb-5">Login to Continue</p>

                        {/* input groups */}
                        <InputGroup className="mb-3 mt-4">

                            <FormControl
                                placeholder="abc@example.com"
                                aria-label="Your Email"
                                aria-describedby="basic-addon2"
                                onBlur={getUserEmail}
                                type="email"

                            />
                            <InputGroup.Text id="basic-addon2"
                                className="bg-primary bg-opacity-75">
                                <FontAwesomeIcon className="fs-5 text-white mx-3" icon={faUser} />
                            </InputGroup.Text>

                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Your Password"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                onBlur={getUserPassword}
                                type="password"
                            />

                            <InputGroup.Text id="basic-addon2"
                                className="bg-primary bg-opacity-75">
                                <FontAwesomeIcon className="fs-5 text-white mx-3" icon={faLock} />
                            </InputGroup.Text>

                        </InputGroup>

                        <Button variant="primary"
                            className="w-100 mb-3" type="submit">
                            Sign in
                        </Button><br />

                        <Button className="mb-3 link text-dark fw-bolder border-0 bg-transparent text-decoration-underline"
                            onClick={handleResetPassword}
                        >
                            Forgot password?
                        </Button>

                        <br />

                    </Form>

                    {/* google sign in button */}

                    <Button variant="outline-danger" className="mb-3 fs-5 fw-bold" onClick={handleGoogleLogIn} type="submit"><FontAwesomeIcon icon={faGoogle} /> Sign in With Google</Button><br />


                    {/* signup button */}
                    <NavLink to="/register"> <Button variant="outline-primary" className="rounded text-dark fw-bolder w-100 mb-4" type="submit"> SignUp Now</Button></NavLink>

                </div>

            </div >


        </div >
    );
};

export default Login;