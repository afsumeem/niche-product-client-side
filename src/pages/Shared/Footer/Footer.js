import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container py-4">
                <div className="row">

                    {/* footer first section */}
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2>The Fragrance Shop</h2>
                        <hr className="w-75 mx-auto" />
                        <p className="mb-5">The Fragrance Shop is a London based Perfume brand.Each piece in our collection has been meticulously designed in London Bridge and embodies our principals of simplicity.</p>
                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        </Button>

                        <Button variant="outline-danger rounded-circle m-2" size="sm">
                            <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a>

                        </Button>

                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://www.skype.com/en/"><FontAwesomeIcon icon={faSkype} /></a>

                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://discord.com/"> <FontAwesomeIcon icon={faDiscord} /></a>

                        </Button>
                    </div>

                    {/* footer gallery section */}
                    <div className="col-md-4 col-sm-12 text-white">

                        {/* footer gallery title */}
                        <h2 >Gallery</h2>

                        {/* footer gallery image */}
                        <hr className="w-50 mx-auto" />
                        <div className="row my-2">

                            <div className="col-md-1"></div>
                            <div className="col-md-3 col-sm-6 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/vhJkXXX/img-4.jpg"} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-6 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/6t7Cgxt/form-bg.jpg"} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-12 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/jwhr8XB/img-6.jpg"} alt="" />
                            </div>
                        </div>

                        {/* footer gallery image */}
                        <div className="row">
                            <div className="col-md-1"></div>

                            <div className="col-md-3 col-sm-6 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/k2dYHwk/img-11.jpg"} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-6 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/dtSzg3N/img-1.jpg"} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-12 mb-1">
                                <img className="rounded img-fluid w-100 h-100" src={"https://i.ibb.co/6t7Cgxt/form-bg.jpg"} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* footer contact section */}
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2 >Contacts</h2>
                        <hr className="w-50 mx-auto" />
                        <div className="d-flex justify-content-center">

                            {/* footer contents */}
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div >
                                <p>25 Jatrabari-1000
                                    <br />
                                    <span className="fs-6"> Dhaka Bangladesh</span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="fs-6">+11 555 123-456 </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="me-4 fs-4">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p>support@hs.com </p>
                            </div>
                        </div>
                        <NavLink to="/signin">
                            <Button className="w-50 mt-3 " variant="outline-info" size="sm">
                                CONTACT US
                            </Button>
                        </NavLink>

                    </div>
                </div>
            </div>
            <p className="text-white text-opacity-50 m-0">Copyright &copy;2021 All Rights Reserved | This Website is made with &#x003C;&#10083;&#x003E; by Afsana Meem </p>
        </div>

    );
};

export default Footer;