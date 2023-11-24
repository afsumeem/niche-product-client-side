import { faClock, faSync, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Facility = () => {
  return (
    // facility section
    <Row className=" mt-5 mb-5 container mx-auto">
      {/* facility -1 */}
      <Col
        xs={12}
        sm={12}
        md={4}
        className="p-4"
        style={{ border: "1px solid rgb(114, 90, 52)" }}
      >
        <FontAwesomeIcon
          className="fs-2 me-2 mb-3"
          style={{
            color: "var(--golden)",
          }}
          icon={faSync}
        />
        <h5 className="fs-5 text-white">Free Same Day Delivery*</h5>
        <p className="fs-6 mt-4 " style={{ color: "rgb(196, 196, 196)" }}>
          Product any fault within 07 days for an immediately exchange.
        </p>
      </Col>

      {/* facility -2 */}
      <Col
        xs={12}
        sm={12}
        md={4}
        className="pt-4 "
        style={{ border: "1px solid rgb(114, 90, 52)" }}
      >
        <FontAwesomeIcon
          className="fs-2 me-2 mb-3"
          style={{
            color: "var(--golden)",
          }}
          icon={faTruck}
        />
        <h5 className="fs-5 text-white">International Shipping</h5>
        <p className="fs-6 mt-4 " style={{ color: "rgb(196, 196, 196)" }}>
          Free worldwide shipping on all Area order above $100
        </p>
      </Col>

      {/* facility -3 */}
      <Col
        xs={12}
        sm={12}
        md={4}
        className="pt-4"
        style={{ border: "1px solid rgb(114, 90, 52)" }}
      >
        <FontAwesomeIcon
          className="fs-2 me-2 mb-3"
          style={{
            color: "var(--golden)",
          }}
          icon={faClock}
        />
        <h5 className="fs-5 text-white">24/7 Friendly Support</h5>
        <p className="fs-6 mt-4 " style={{ color: "rgb(196, 196, 196)" }}>
          Our Support Team Always Ready For You to 7 days a week
        </p>
      </Col>
    </Row>
  );
};

export default Facility;
