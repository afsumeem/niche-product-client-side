import React from 'react';
import { Breadcrumb, Nav, Navbar } from 'react-bootstrap';
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
import { faCartPlus, faFileInvoiceDollar, faShoppingBasket, faSignOutAlt, faTasks, faUser, faUsersCog, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Payment from '../Payment/Payment';
import AdminRoute from '../../AdminRoute/AdminRoute';
import './Dashboard.css';
import DashBoardHome from '../DashBoardHome/DashBoardHome';


const Dashboard = () => {

    let { path, url } = useRouteMatch();

    const { user, admin, logOut } = useAuth();

    return (

        // dashboard
        <Row className="me-0">

            {/* dashboard nested route */}
            <Col xs={12} sm={12} md={3} className="px-0" >
                <Navbar bg="dark" expand="md">
                    <Container className=" d-flex flex-column dashboard-route">

                        <Navbar.Brand className="text-white me-auto" href="/home">The Fragrance Shop</Navbar.Brand>

                        <hr className="w-100 bg-white" />

                        < NavLink to={`${url}`} className="text-white my-1 text-decoration-none text-start me-auto">
                            <FontAwesomeIcon className="fs-4 me-2" icon={faUsersCog} />
                            Dashboard
                        </NavLink>

                        <hr className="w-100 bg-white" />

                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto text-start" />

                        <Navbar.Collapse id="basic-navbar-nav" className="me-auto text-start">

                            <Nav className="d-flex flex-column">

                                {/* dashboard options */}

                                {admin ?
                                    <>
                                        <NavLink to={`${url}/manageOrder`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faShoppingBasket} />
                                            Manage All Order
                                        </NavLink><br />

                                        <NavLink to={`${url}/newProduct`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faPlusSquare} />
                                            Add New Product
                                        </NavLink><br />

                                        <hr className="w-100 bg-white" />

                                        <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faUserShield} />
                                            Make Admin
                                        </NavLink><br />


                                        <NavLink to={`${url}/manageProduct`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faTasks} />
                                            Manage Products
                                        </NavLink><br />
                                    </>
                                    :
                                    <>
                                        <NavLink to={`${url}/payment`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faFileInvoiceDollar} />
                                            Payment
                                        </NavLink><br />

                                        <NavLink to={`${url}/myorder`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faCartPlus} />
                                            My Orders
                                        </NavLink><br />

                                        <NavLink to={`${url}/postReview`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <FontAwesomeIcon className="fs-6 me-2" icon={faCommentAlt} />
                                            Add Review
                                        </NavLink><br />
                                    </>
                                }

                                {/* users name and logout button */}

                                <hr className="w-100 mx-auto text-white" />

                                <Navbar.Text className="text-white my-1 text-start fw-bolder me-auto">
                                    <FontAwesomeIcon className="fs-6 me-2" icon={faUser} />
                                    <span className="text-info">
                                        {user.displayName && user.displayName}
                                    </span>
                                </Navbar.Text>

                                <NavLink onClick={logOut} className="text-decoration-none  text-white" to="/home">
                                    <FontAwesomeIcon className="fs-6 me-2" icon={faSignOutAlt} />
                                    Logout
                                </NavLink>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>


            <Col sx={12} sm={12} md={9} className="px-0">

                <Breadcrumb className="my-4 ms-3">
                    <Breadcrumb.Item href="/home" className="fs-4">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="fs-4">Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <hr />

                {/* //nested route */}

                <Switch>

                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>

                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <Route path={`${path}/postReview`}>
                        <PostReview></PostReview>
                    </Route>

                    <AdminRoute path={`${path}/newProduct`}>
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>

                    <Route path={`${path}/myOrder`}>
                        <MyOrders></MyOrders>
                    </Route>

                </Switch>
            </Col>
        </Row >

    );
};

export default Dashboard;