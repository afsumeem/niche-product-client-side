import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  // import functions useFirebase hook
  const {
    getUserEmail,
    getUserPassword,
    handleRegistration,
    name,
    email,
    error,
    getUserName,
    saveUser,
    setUsers,
    setError,
    verifyEmail,
    setUserName,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard";

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      {/* register form section */}
      <div className="p-5 mx-auto bg-white">
        <h3
          className=" text-uppercase text-center"
          style={{ color: "var(--golden)" }}
        >
          Register
        </h3>

        {/* handle submit */}
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            handleRegistration()
              .then((result) => {
                const user = result.user;

                user.email = email;
                user.displayName = name;

                setUsers(user);
                history.push(redirect_uri);

                verifyEmail();
                setUserName();

                //save user to database
                saveUser(user.displayName, user.email, "POST");
              })
              .catch((error) => {
                setError(error.message);
              });
          }}
          className="w-100 mx-auto"
        >
          <div className="row mb-3 text-danger">{error}</div>

          {/* sign up form input groups */}

          <FloatingLabel
            controlId="floatingInput"
            label="Your Name"
            className="mb-3 "
          >
            <Form.Control
              onBlur={getUserName}
              type="text"
              placeholder="Mark otto"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              onBlur={getUserEmail}
              type="email"
              placeholder="abc@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              onBlur={getUserPassword}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>

          {/* signup button */}
          <button
            className="w-100 my-3 btn"
            type="submit"
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
              backgroundColor: "none",
            }}
          >
            Sign up
          </button>
        </Form>

        {/* login page path */}
        <NavLink to="/login">
          <button
            className="btn text-decoration-underline link border-0 w-100 "
            type="submit"
          >
            Already have an account ?
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

export default Register;
