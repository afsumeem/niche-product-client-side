import { faClock, faSync, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Facility = () => {
    return (

        // facility section
        <Row className="border-top mt-5 mb-5 container mx-auto">

            {/* facility -1 */}
            <Col xs={12} sm={12} md={4} className="pt-4 border">
                <FontAwesomeIcon className="fs-1 text-warning me-2 mb-3" icon={faSync} />
                <h5 className="fs-3">Free Same Day Delivery*</h5>
                <p className="fs-5 mt-4">Product any fault within 07 days for an immediately exchange.</p>
            </Col>


            {/* facility -2 */}
            <Col xs={12} sm={12} md={4} className="pt-4 border">
                <FontAwesomeIcon className="fs-1 text-warning me-2 mb-3" icon={faTruck} />
                <h5 className="fs-3">International Shipping</h5>
                <p className="fs-5 mt-4">Free worldwide shipping on all Area order above $100</p>
            </Col>


            {/* facility -3 */}
            <Col xs={12} sm={12} md={4} className="pt-4 border">
                <FontAwesomeIcon className="fs-1 text-warning me-2 mb-3" icon={faClock} />
                <h5 className="fs-3">24/7 Friendly Support</h5>
                <p className="fs-5 mt-4">Our Support Team Always Ready For You to 7 days a week</p>
            </Col>
        </Row>
    );
};

export default Facility;