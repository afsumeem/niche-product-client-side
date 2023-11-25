import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    handleResetPassword,
    saveUser,
    getUserEmail,
    getUserPassword,
    setUsers,
    setError,
    userLogin,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard";

  //handle google sign in button
  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUsers(user);
        history.push(redirect_uri);

        //save user to database
        saveUser(user.displayName, user.email, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //handle sign in using email and password
  const userLoginWithEmailPass = (e) => {
    e.preventDefault();
    userLogin()
      .then((result) => {
        setUsers(result.user);
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      {/* login form section */}
      <div className="p-5 mx-auto bg-white">
        <Form onSubmit={userLoginWithEmailPass} className="w-100 mx-auto ">
          {/* login form design */}
          <h3
            className=" text-uppercase text-center"
            style={{ color: "var(--golden)" }}
          >
            Welcome back!
          </h3>
          <p className="mb-2 text-center">Login to Continue</p>

          {/* google sign in button */}

          <button
            title="Login with Google"
            className="mb-2 fs-5 border-0 btn d-block m-auto"
            style={{ color: "var(--golden)" }}
            onClick={handleGoogleLogIn}
            type="submit"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          {/* input groups */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="abc@example.com"
              aria-label="Your Email"
              aria-describedby="basic-addon2"
              onBlur={getUserEmail}
              type="email"
            />
            <InputGroup.Text
              id="basic-addon2"
              style={{ background: "var(--golden)" }}
            >
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

            <InputGroup.Text
              id="basic-addon2"
              style={{ background: "var(--golden)" }}
            >
              <FontAwesomeIcon className="fs-5 text-white mx-3" icon={faLock} />
            </InputGroup.Text>
          </InputGroup>

          {/* sign in button */}
          <button
            className="w-100 mb-3 btn"
            type="submit"
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
              backgroundColor: "none",
            }}
          >
            Log in
          </button>
          <br />

          {/* button for forgot password */}
          <button
            className="link text-dark border-0 bg-transparent text-decoration-underline mx-auto d-block"
            onClick={handleResetPassword}
          >
            Forgot password?
          </button>
        </Form>

        {/* signup button */}
        <NavLink to="/register">
          {" "}
          <button
            className="btn text-decoration-underline link border-0 w-100"
            type="submit"
          >
            {" "}
            Don't have an account?
          </button>
        </NavLink>
        <NavLink to="/home">
          <button
            className="btn text-decoration-underline link border-0 w-100 "
            type="submit"
          >
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
