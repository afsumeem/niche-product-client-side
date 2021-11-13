import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const PurchaseProducts = () => {

    const { id } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const [productDetails, setProductDetails] = useState([]);

    // fetch single product from api using id

    useEffect(() => {

        const url = `https://ancient-headland-15558.herokuapp.com/brands/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, []);

    // handle submit
    const onSubmit = data => {

        axios.post('https://ancient-headland-15558.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Form submitted successfully");
                    reset();
                }
            })
    };

    return (
        <div >
            <Header></Header>
            <div className="container mt-5">
                <div className="row m-0 pt-5">
                    <div className="col-md-6">
                        {/* Product detail */}
                        <div className="border py-3 px-5">

                            <h2 className="mb-4">{productDetails.name}</h2>
                            <img src={productDetails.img} className="img-fluid" alt="" />
                            <p className="text-start mt-4">{productDetails.desc}</p>
                            <h3 className="text-primary text-start">$ {productDetails.price}</h3>
                        </div>
                    </div>

                    <div className="col-md-6">

                        {/* Place order header */}
                        <h3 className="text-dark ">Order your Favorite Fragrance</h3>
                        <div className="d-flex justify-content-center">


                            {/* booking form */}
                            <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                                <input className="mx-3 my-2 w-75 px-4 py-2" defaultValue={user.displayName} {...register("name")} />

                                {productDetails.name &&
                                    <input className="mx-3 my-2 w-75 px-4 py-2" value={productDetails.name} {...register("productName", { required: true })} />
                                }

                                <input className="mx-3 my-2 w-75 px-4 py-2" value={productDetails.price} {...register("price", { required: true })} />

                                <input className="mx-3 my-2 w-75 px-4 py-2" placeholder="Address"{...register("Address", { required: true })} />

                                <input className="mx-3 my-2 w-75 px-4 py-2" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                                <input className="mx-3 my-2 w-75 px-4 py-2" type="date" placeholder="Choose Date"{...register("date", { required: true })} />

                                <input className="mx-3 my-2 w-75 px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                                <br />

                                {/* order status */}
                                <input className="mx-3 my-2 w-25 px-4 py-2" defaultValue="Pending" readOnly {...register("status")} title="Order status" />

                                {/* submit button */}
                                < input className="d-block mx-auto mx-3 my-2 btn btn-info w-75" type="submit" value="Order Now" />


                                {/* button for going back to home */}
                                < NavLink to="/home" className=" text-decoration-none d-block mx-auto mx-3 my-2 btn btn-outline-success w-75" > Choose Another Fragrance</NavLink>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProducts;