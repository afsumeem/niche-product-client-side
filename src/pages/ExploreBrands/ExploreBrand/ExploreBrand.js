import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ExploreBrand = ({ exploreBrand }) => {
  const { name, desc, price, image, _id } = exploreBrand;

  // style images
  const imgStyle = {
    height: "220px",
    width: "50%",
    border: "none",
    display: "block",
    margin: "auto",
  };

  return (
    <div className="mt-5">
      {/* show perfume details */}

      <Col>
        <Card className=" m-3 brand-card">
          {/* perfume brand info thumbnail */}
          <Card.Img variant="top" src={image} style={imgStyle} />
          <Card.Body className="p-2">
            <div className="d-flex justify-content-around align-items-center">
              <Card.Title className="text-white text-center fs-6 ">
                {name}
              </Card.Title>
              <h4
                className="text-center"
                style={{
                  color: "var(--golden)",
                  fontWeight: 200,
                }}
              >
                {" "}
                ${price}
              </h4>
            </div>
            <Card.Text className=" text-white text-center mt-2">
              {desc.slice(0, 50)}
            </Card.Text>
          </Card.Body>

          {/* buy now button */}
          <Card.Footer style={{ borderTop: "1px solid rgb(58, 46, 27)" }}>
            <NavLink
              to={`/purchase/${_id}`}
              className="text-decoration-none fs-5"
            >
              <button
                style={{
                  color: "var(--golden)",
                }}
                className="btn d-block m-auto"
              >
                <FontAwesomeIcon className="fs-6 me-2" icon={faCartPlus} />{" "}
                Purchase Now
              </button>
            </NavLink>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default ExploreBrand;
