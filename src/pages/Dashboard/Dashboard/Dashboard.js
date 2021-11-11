import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PostReview from '../PostReview/PostReview';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const { user, logOut } = useAuth();

    return (

        <Row >
            <Col xs={12} md={3} >
                <Navbar bg="dark" expand="lg">
                    <Container className=" d-flex flex-column">
                        <Navbar.Brand className="text-white me-auto" href="#home"></Navbar.Brand>

                        <Navbar.Text className="text-info me-auto my-3 text-start fw-bolder mx-2">
                            <FontAwesomeIcon className="fs-6 me-1" icon={faUser} />
                            {user.displayName && user.displayName}
                        </Navbar.Text>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className="me-auto text-start">
                            <Nav className="d-flex flex-column">

                                <NavLink to={`${url}/manageOrder`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Manage All Order
                                </NavLink><br />

                                <NavLink to={`${url}/manageProduct`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Manage Products
                                </NavLink><br />

                                <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Make Admin
                                </NavLink><br />

                                <hr className="w-100 mx-auto bg-white" />

                                <NavLink to={`${url}/postReview`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Add Review
                                </NavLink><br />

                                <NavLink to={`${url}/newProduct`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Add New Product
                                </NavLink><br />

                                <NavLink to={`${url}/myorder`} style={{ textDecoration: 'none', color: 'white' }}>
                                    My Orders
                                </NavLink><br />

                                <NavLink onClick={logOut} className="text-decoration-none  text-white" to="/home">Logout</NavLink>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>

            <Col sm={12} md={9}>

                {/* //nested route */}

                <Switch>

                    <Route path={`${path}/manageOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>

                    <Route path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </Route>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>

                    <Route path={`${path}/postReview`}>
                        <PostReview></PostReview>
                    </Route>

                    <Route path={`${path}/newProduct`}>
                        <AddNewProduct></AddNewProduct>
                    </Route>

                    <Route path={`${path}/myOrder`}>
                        <MyOrders></MyOrders>
                    </Route>

                </Switch>
            </Col>
        </Row>

    );
};

export default Dashboard;