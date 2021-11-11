import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
            <div className="mt-5">

                {/* add review title */}
                <h2 className="text-dark pt-5 text-uppercase">Add Review</h2>
                <div className="d-flex justify-content-center">


                    {/* Add review form */}
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className=" m-2 w-50 px-4 py-2" value={user.displayName} {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Your Address"{...register("address", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                        <br />

                        <input
                            type="number"
                            placeholder="Rating(1-5)"
                            className="m-2 w-50 px-4 py-2"
                            {...register('Rating', {
                                max: { value: 5 }
                            })}
                        />

                        {/* submit button */}
                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add Review" />


                        {/* button for going back to home */}
                        < NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn w-25 btn-outline-success" > Home</NavLink>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default PostReview;