import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ExploreBrand from "../ExploreBrand/ExploreBrand";

// fetch perfume brands

const ExploreBrands = () => {
  const [exploreBrands, setExploreBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setExploreBrands(data));
  }, []);

  return (
    <div>
      {/* navbar */}
      <Header></Header>

      {/* explore brands section */}
      <div className="container">
        <div className="my-5">
          <h3
            className="pb-3"
            style={{
              color: "var(--golden)",
            }}
          >
            EXPLORE ALL BRANDS
          </h3>

          {/* map all brands */}

          <Row xs={1} md={3} sm={2} className="g-4">
            {exploreBrands.map((exploreBrand) => (
              <ExploreBrand
                key={exploreBrand._id}
                exploreBrand={exploreBrand}
              ></ExploreBrand>
            ))}
          </Row>
        </div>
      </div>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default ExploreBrands;
