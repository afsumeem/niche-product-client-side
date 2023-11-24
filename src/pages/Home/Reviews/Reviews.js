import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // load reviews from api
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    // testimonial
    <div className=" py-5 review-container my-5 ps-0">
      {/* testimonial title */}

      <div className="container">
        <h3
          className="pb-4"
          style={{
            color: "var(--golden)",
          }}
        >
          WHAT OUR CUSTOMER SAYS
        </h3>
        <Slider {...settings} className="container">
          {reviews.map((review) => (
            <div className="w-50 d-block mx-auto" key={review._id}>
              <img
                src={review.img}
                alt=""
                style={{
                  height: "100px",
                  width: "100px",
                  display: "block",
                  margin: "auto",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />

              <div className=" text-white">
                <p>"{review.reviewDesc}"</p>
                <h4
                  style={{
                    color: "var(--golden)",
                  }}
                >
                  {" "}
                  {review.name}
                </h4>
                <h6>{review.address}</h6>

                <ReactStars
                  count={review.rating}
                  size={24}
                  color="var(--golden)"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
