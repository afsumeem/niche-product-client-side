import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Alert, Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw9GSII8bV4mbobJZ9P2KtPsTLNc4EeiRaEIdIjlym1qCLelfXUdzcea8UCHOWJoObLtMJ63WfjVXSeXjLjTTwt00eiv2Eoyn"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <Breadcrumb className="my-4 ms-3">
        <Breadcrumb.Item href="/home" className="fs-6">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item className="fs-6 text-decoration-none">
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item className="fs-6 text-decoration-none" active>
          Payment
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr style={{ color: "var(--golden)" }} />

      <div>
        <h3 className="mb-2 text-center text-white">
          Please Pay for:{" "}
          <span style={{ color: "var(--golden)" }}> {appointmentId}</span>{" "}
        </h3>

        {appointment?.price && (
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;

/*
1.install stripe and stripe-react
2. set publishable key
3. elements
4. checkout form

------------
5. create payment method

*/
