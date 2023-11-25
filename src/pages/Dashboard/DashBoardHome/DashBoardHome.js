import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DashBoardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Breadcrumb className="my-4 ms-3">
        <Breadcrumb.Item href="/home" className="fs-6">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item className="fs-6 text-decoration-none" active>
          Dashboard
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr style={{ color: "var(--golden)" }} />
      <div className="container mt-5">
        <h3 className="mb-5 text-center" style={{ color: "var(--golden)" }}>
          Welcome, {user.displayName}
        </h3>
        <p
          style={{
            color: "rgb(196, 196, 196)",
            textAlign: "justify",
            padding: "20px",
          }}
        >
          "Welcome to{" "}
          <span style={{ color: "var(--golden)" }}>Fragrance Shop</span>, your
          premier destination for a sensory journey through exquisite
          fragrances. Immerse yourself in a world of captivating scents
          carefully curated to elevate your senses and enhance your unique
          style. Our online fragrance boutique boasts a diverse collection of
          the finest perfumes and colognes, sourced from renowned brands and
          emerging artisans alike. Elevate your everyday moments with our
          extraordinary fragrances, each bottle telling a story of
          craftsmanship, elegance, and self-expression."
        </p>

        <NavLink to="/explore" className=" text-decoration-none">
          <button
            className="btn m-auto d-block text-decoration-none"
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
            }}
          >
            Purchase your favorite one
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardHome;
