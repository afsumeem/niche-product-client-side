import React, { useEffect, useState } from 'react';
import Testimonial from 'react-testimonial';
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);

    return (
        <div>
            <h2>Customer Review</h2>

            <Testimonial>

                {
                    reviews.map(review =>

                        <div className="card content mx-auto" >
                            <div className="card-body">
                                <h2>{review.name}</h2>
                                <h5>{review.address}</h5>
                                <p> {review.reviewDesc}</p>


                                <ReactStars
                                    count={review.Rating}
                                    size={24}
                                    color="#ffd700"
                                />
                            </div>
                        </div>)
                }

            </Testimonial>

        </div >
    );
};

export default Reviews;
