import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    // load reviews from api
    useEffect(() => {
        fetch('https://ancient-headland-15558.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);

    return (

        // testimonial
        <div className=" py-5 review-container my-5 ps-0">

            {/* testimonial title */}
            <h3 className="mb-4 text-white">WHAT OUR CUSTOMER SAYS</h3>

            <div className="container">
                <Slider {...settings}>
                    {
                        reviews.map(review =>

                            <div className="w-50 mx-auto"
                                key={review._id}
                            >

                                <img src={review.img} alt="" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '20px' }} />

                                <div className="text-start text-white">

                                    <p>"{review.reviewDesc}"</p>
                                    <h4> - {review.name}</h4>
                                    <h6>{review.address}</h6>

                                    <ReactStars
                                        count={review.rating}
                                        size={24}
                                        color="#ffd700"
                                    />
                                </div>

                            </div>

                        )
                    }

                </Slider>
            </div>


        </div >
    );
};

export default Reviews;
