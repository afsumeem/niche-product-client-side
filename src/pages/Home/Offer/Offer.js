import React from "react";
import "./Offer.css";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div className=" py-5 offer-container my-5 ps-0">
      <div className="banner-description w-50 ms-5 ">
        <h2 className="text-white fw-bold">
          Year-End Sale! <br />
          Up to{" "}
          <span
            style={{
              color: "var(--golden)",
              fontWeight: "bold",
            }}
          >
            50%{" "}
          </span>
          OFF
        </h2>
        <p className="text-white">
          Indulge in Timeless Elegance – Unveil a Symphony of Scents Crafted for
          Every Occasion.Indulge in Timeless Elegance – Unveil a Symphony of
          Scents Crafted for Every Occasion.
        </p>
      </div>

      <NavLink
        to="/explore"
        className="btn ms-5"
        style={{
          border: "1px solid var(--golden)",
          color: "var(--golden)",
          width: "150px",
        }}
      >
        Explore
      </NavLink>
    </div>
  );
};

export default Offer;
