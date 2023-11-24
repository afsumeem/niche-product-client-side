import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import banner1 from "../../../images/banner/banner-1.jpg";
import banner1 from "../../../images/banner/perfume-removebg-preview.png";
// import banner1 from "../../../images/banner/perfume.PNG";

import "./Banner.css";

const Banner = () => {
  return (
    <Container className="banner-container">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col>
          <div className="banner-description">
            <h2 className="text-white">
              Discover Irresistible Fragrances at{" "}
              <span
                style={{
                  color: "var(--golden)",
                  fontWeight: 400,
                }}
              >
                {" "}
                Fragrance Shop!
              </span>
            </h2>
            <p className="text-white">
              Indulge in Timeless Elegance – Unveil a Symphony of Scents Crafted
              for Every Occasion.Indulge in Timeless Elegance – Unveil a
              Symphony of Scents Crafted for Every Occasion.
            </p>
          </div>

          <NavLink
            to="/explore"
            className="btn "
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
            }}
          >
            Explore
          </NavLink>
        </Col>
        <Col>
          <div className="banner-img">
            <img
              className="d-block m-auto banner-img"
              src={banner1}
              alt="Banner Img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
