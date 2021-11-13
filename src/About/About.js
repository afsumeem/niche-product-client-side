import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import './About.css';
import image1 from '../images/form-bg.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-8.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-6.jpg';


const About = () => {
    return (
        <div>
            <Header></Header>
            <Row className="mt-5 me-0">
                <Col xs={12} sm={12} md={6} className="about-us-thumbnail">
                </Col>

                <Col xs={12} sm={12} md={6} className="p-5 text-start">
                    <h1 className="pt-5" >ABOUT US</h1>
                    <p className="pt-3" >The Fragrance Shop is a London based Perfume brand.Each piece in our collection has been meticulously designed in our studio near London Bridge and embodies our principals of simplicity, detail and understated masculinity.Our collection of Pendants, Cuffs and Rings have been designed to be worn individually or layered and stacked together. embodies our principals of simplicity, detail and understated masculinity.Our collection of Pendants, Cuffs and Rings have been designed to be worn individually or layered and stacked together. detail and understated masculinity.Our collection of Pendants, Cuffs and Rings have been designed to be worn individually or layered and stacked together</p>
                    <NavLink to="/home" className="btn btn-dark p-3 mt-3 ">
                        Purchase Your Favourite One..
                    </NavLink>
                </Col>
            </Row>
            <div className="mt-5">
                <h2 className="mb-5">GALLERY</h2>
                <Row className="me-0">
                    <Col xs={12} sm={12} md={4}>
                        <img className="img-fluid w-75 mb-2 mx-auto" src={image1} alt="image1" />
                        <img className="img-fluid w-75 mb-2 mx-auto" src={image2} alt="image1" />
                    </Col>
                    <Col xs={12} sm={12} md={4} >
                        <img className="img-fluid w-50 mb-2 mx-auto" src={image3} alt="image1" />
                    </Col>
                    <Col xs={12} sm={12} md={4} >
                        <img className="img-fluid w-75 mb-2 mx-auto" src={image4} alt="image1" />
                        <img className="img-fluid w-75 mb-2 mx-auto" src={image5} alt="image1" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;