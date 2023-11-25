import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./About.css";
import image1 from "../../images/form-bg.jpg";
import image2 from "../../images/img-2.jpg";
import image3 from "../../images/img-8.jpg";
import image4 from "../../images/img-4.jpg";
import image5 from "../../images/img-6.jpg";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <div>
      {/* header section */}
      <Header></Header>

      {/* about us details */}
      <div className="text-center about-description">
        <h3
          className="pt-5"
          style={{
            color: "var(--golden)",
          }}
        >
          ABOUT US
        </h3>
        <p style={{ color: "rgb(196, 196, 196)" }}>
          The Fragrance Shop is a London based Perfume brand.Each piece in our
          collection has been meticulously designed in our studio near London
          Bridge and embodies our principals of simplicity, detail and
          understated masculinity.Our collection of Pendants, Cuffs and Rings
          have been designed to be worn individually or layered and stacked
          together. embodies our principals of simplicity, detail and
          understated masculinity.Our collection of Pendants, Cuffs and Rings
          have been designed to be worn individually or layered and stacked
          together. detail and understated masculinity.
        </p>
        <NavLink
          to="/explore"
          className="btn "
          style={{
            border: "1px solid var(--golden)",
            color: "var(--golden)",
          }}
        >
          Purchase Your Favorite One
        </NavLink>
      </div>

      {/* gallery section */}

      <div className="my-5">
        {/* gallery section title */}
        <h3
          className="pt-2 pb-5 text-center"
          style={{
            color: "var(--golden)",
          }}
        >
          GALLERY
        </h3>

        <div className="gallery-images">
          {/* gallery images  */}

          <img className="img-fluid mb-2 mx-auto" src={image1} alt="image1" />
          <img className="img-fluid mb-2 mx-auto" src={image2} alt="image1" />
          <img className="img-fluid mb-2 mx-auto" src={image5} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image4} alt="image1" />
          <img className="img-fluid mb-2 mx-auto" src={image5} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image2} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image4} alt="image1" />
          <img className="img-fluid mb-2 mx-auto" src={image5} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image2} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image4} alt="image1" />
          <img className="img-fluid mb-2 mx-auto" src={image5} alt="image1" />

          <img className="img-fluid mb-2 mx-auto" src={image2} alt="image1" />
        </div>
      </div>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default About;
