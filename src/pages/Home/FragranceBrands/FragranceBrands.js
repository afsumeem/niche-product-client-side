import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Brand from "../Brand/Brand";

const FragranceBrands = () => {
  const [brands, setBrands] = useState([]);

  // fetch brand from api

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      <h3
        className="pb-3"
        style={{
          color: "var(--golden)",
        }}
      >
        TOP FRAGRANCE BRANDS
      </h3>

      {/* map all brand into single brands */}
      <Row xs={1} md={3} sm={2} className="g-5">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </Row>
    </div>
  );
};

export default FragranceBrands;
