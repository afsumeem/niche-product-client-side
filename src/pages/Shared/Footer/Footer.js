import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container className="pb-5">
        <Row>
          {/* footer first section */}
          <div className="col-md-4 col-sm-12 text-white mt-4 ">
            <h4
              style={{
                color: "var(--golden)",
                marginBottom: "15px",
              }}
            >
              The Fragrance Shop
            </h4>

            <p className="mb-2">
              The Fragrance Shop is a London based Perfume brand.Each piece in
              our collection has been meticulously designed in London Bridge and
              embodies our principals of simplicity.
            </p>
            <Button
              variant=" rounded-circle m-2"
              size="sm"
              style={{
                border: "1px solid var(--golden)",
              }}
            >
              <a href="https://twitter.com/?lang=en">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </a>
            </Button>

            <Button
              style={{
                border: "1px solid var(--golden)",
              }}
              variant=" rounded-circle m-2"
              size="sm"
            >
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </a>
            </Button>

            <Button
              style={{
                border: "1px solid var(--golden)",
              }}
              variant=" rounded-circle m-2"
              size="sm"
            >
              <a href="https://www.instagram.com/">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </a>
            </Button>
          </div>

          {/* footer gallery section */}
          <div className="col-md-4 col-sm-12 mt-4">
            {/* footer gallery title */}
            <h4
              style={{
                color: "var(--golden)",
                marginBottom: "15px",
              }}
            >
              Gallery
            </h4>

            <div className="flex my-2">
              <img
                className="rounded "
                style={{
                  height: "80px",
                  width: "80px",
                }}
                src={"https://i.ibb.co/vhJkXXX/img-4.jpg"}
                alt=""
              />

              <img
                className="rounded mx-2"
                style={{
                  height: "80px",
                  width: "80px",
                }}
                src={"https://i.ibb.co/6t7Cgxt/form-bg.jpg"}
                alt=""
              />

              <img
                style={{
                  height: "80px",
                  width: "80px",
                }}
                className="rounded "
                src={"https://i.ibb.co/jwhr8XB/img-6.jpg"}
                alt=""
              />
            </div>

            {/* footer gallery image */}
            <div>
              <img
                style={{
                  height: "80px",
                  width: "80px",
                }}
                className="rounded"
                src={"https://i.ibb.co/k2dYHwk/img-11.jpg"}
                alt=""
              />

              <img
                style={{
                  height: "80px",
                  width: "80px",
                }}
                className="rounded mx-2"
                src={"https://i.ibb.co/dtSzg3N/img-1.jpg"}
                alt=""
              />

              <img
                style={{
                  height: "80px",
                  width: "80px",
                }}
                className="rounded"
                src={"https://i.ibb.co/6t7Cgxt/form-bg.jpg"}
                alt=""
              />
            </div>
          </div>

          {/* footer contact section */}
          <div className="col-md-4 col-sm-12 text-white mt-4">
            <h4
              style={{
                color: "var(--golden)",
                marginBottom: "15px",
              }}
            >
              Contacts
            </h4>

            <div className="d-flex ">
              {/* footer contents */}
              <div className="me-4 d-flex align-items-center fs-6">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </div>
              <div>
                <p>
                  25 Jatrabari-1000
                  <br />
                  <span className="fs-6"> Dhaka Bangladesh</span>
                </p>
              </div>
            </div>
            <div className="d-flex ">
              <div className="me-4 d-flex align-items-center fs-6">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </div>
              <div>
                <p className="fs-6">+11 555 123-456 </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="me-4 fs-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    color: "var(--golden)",
                  }}
                />
              </div>
              <div>
                <p>support@hs.com </p>
              </div>
            </div>
            <NavLink to="/signin">
              <Button
                className=" mt-3"
                style={{
                  border: "1px solid var(--golden)",
                  color: "var(--golden)",
                  background: "black",
                }}
                size="sm"
              >
                CONTACT US
              </Button>
            </NavLink>
          </div>
        </Row>
      </Container>
      <p className="text-white text-opacity-50 m-0 text-center">
        Copyright &copy;2023 All Rights Reserved | This Website is made with
        &#x003C;&#10083;&#x003E; by Afsana Meem{" "}
      </p>
    </div>
  );
};

export default Footer;
