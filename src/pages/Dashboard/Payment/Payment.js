import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw9GSII8bV4mbobJZ9P2KtPsTLNc4EeiRaEIdIjlym1qCLelfXUdzcea8UCHOWJoObLtMJ63WfjVXSeXjLjTTwt00eiv2Eoyn');



const Payment = () => {

    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (

        < div >

            <Alert variant='warning' className="p-5 m-5">
                <h2>Please Pay for:{appointmentId}</h2>
                <h4>Pay: ${appointment.price}</h4>
            </Alert>

            {appointment?.price && < Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}

        </div >
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