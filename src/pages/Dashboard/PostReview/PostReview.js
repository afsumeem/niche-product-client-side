import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const PostReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { user } = useAuth()

    const onSubmit = data => {

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };


    return (
        <div>

            {/* add review title */}

            <h3 className="pt-4 pb-2 text-uppercase">Your Feedback means a Lot!!</h3>

            <FontAwesomeIcon className="fs-6 me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="fs-6 me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="fs-6 me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="fs-6 me-2 text-warning" icon={faStar} />
            <FontAwesomeIcon className="fs-6 me-2 text-warning" icon={faStar} />


            <div className="d-flex justify-content-center">

                {/* Add review form */}
                <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className=" m-2 w-50 px-4 py-2" value={user.displayName} {...register("name", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Image URL"{...register("img", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Your Address"{...register("address", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                    <br />

                    <input
                        type="number"
                        placeholder="Rate your experience out of 5"
                        className="m-2 w-50 px-4 py-2"
                        {...register('rating', {
                            max: { value: 5 }
                        })}
                    />

                    {/* <select {...register("Rating")} className='m-2 w-50 px-4 py-2' placeholder="Rate your experience out of 5">
                        <option value="1">&#8902;</option>
                        <option value="2">&#8902;&#8902;</option>
                        <option value="3">&#8902;&#8902;&#8902;</option>
                        <option value="4">&#8902;&#8902;&#8902;&#8902;</option>
                        <option value="5">&#8902;&#8902;&#8902;&#8902;&#8902;</option>
                    </select> */}

                    {/* submit button */}
                    < input className="d-block mx-auto m-3 btn btn-success w-50" type="submit" value="Add Review" />

                </form>
            </div>
        </div >
    );
};

export default PostReview;