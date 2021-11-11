import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AddNewProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:5000/brands', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Product Added successfully");
                    reset();
                }
            })
    };


    return (
        <div>

            <div className="mt-5">

                {/* add review title */}
                <h2 className="text-dark pt-5 text-uppercase">Add new product</h2>
                <div className="d-flex justify-content-center">


                    {/* Add review form */}
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className=" m-2 w-50 px-4 py-2" placeholder="Brand Name" {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Image Link"{...register("img", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Brand Description"{...register("desc", { required: true })} />
                        <br />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Price"{...register("price", { required: true })} />
                        <br />


                        {/* submit button */}
                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add New Fragrance Brand" />


                        {/* button for going back to home */}
                        < NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn w-25 btn-outline-success" > Home</NavLink>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddNewProduct;