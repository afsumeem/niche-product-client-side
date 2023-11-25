import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import {} from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "react-bootstrap";

const PostReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review Added successfully");
        reset();
      }
    });
  };

  return (
    <div>
      <Breadcrumb className="my-4 ms-3">
        <Breadcrumb.Item href="/home" className="fs-6">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/dashboard" className="fs-6 ">
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item className="fs-6 " active>
          postReview
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr style={{ color: "var(--golden)" }} />
      {/* add review title */}

      <h3 className="my-5 text-center" style={{ color: "var(--golden)" }}>
        Your Feedback means a Lot!!
      </h3>

      <div className="d-block m-auto ">
        {/* Add review form */}
        <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="d-block m-auto mb-2 w-50 px-4 py-2"
            value={user.displayName}
            {...register("name", { required: true })}
          />

          <input
            className="d-block m-auto mb-2 w-50 px-4 py-2"
            placeholder="Image URL"
            {...register("img", { required: true })}
          />

          <input
            className="d-block m-auto mb-2 w-50 px-4 py-2"
            placeholder="Your Address"
            {...register("address", { required: true })}
          />

          <input
            className="d-block m-auto mb-2 w-50 px-4 py-2"
            placeholder="Write your review"
            {...register("reviewDesc", { required: true })}
          />

          <input
            type="number"
            placeholder="Rate your experience out of 5"
            className="d-block m-auto mb-4 w-50 px-4 py-2"
            {...register("rating", {
              max: { value: 5 },
            })}
          />

          {/* submit button */}
          <input
            className="btn m-auto w-50 d-block text-decoration-none"
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
            }}
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default PostReview;
