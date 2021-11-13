import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './AddNewProduct.css';

const AddNewProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit button 
    const onSubmit = data => {

        axios.post('https://ancient-headland-15558.herokuapp.com/brands', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Product Added successfully");
                    reset();
                }
            })
    };


    return (
        <div className="product-form-container">

            {/* add brand title */}
            <h2 className=" pt-5 text-white text-uppercase">Add New Fragrance Brand</h2>
            <div className="d-flex justify-content-center">


                {/* Add brand form */}
                <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className=" m-2 w-50 px-4 py-2 opacity-75" placeholder="Brand Name" {...register("name", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2 opacity-75" placeholder="Image URL Link"{...register("img", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2 opacity-75" placeholder="Product Description"{...register("desc", { required: true })} />
                    <br />

                    <input className="m-2 w-50 px-4 py-2 opacity-75" placeholder="Price"{...register("price", { required: true })} />
                    <br />


                    {/* submit button */}
                    < input className="d-block mx-auto m-3 btn btn-primary w-50" type="submit" value="Add Brand" />


                    {/* explore all perfume brands button  */}
                    < NavLink to="/explore" className=" text-decoration-none d-block mx-auto m-3 btn w-50 btn-outline-primary" > View All Brands</NavLink>

                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;