import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

    const orders = myOrders.filter(order => user.email === order.email)

    return (
        <div>
            <h2>My orders</h2>
            {
                orders.map(myOrder => <MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}
                ></MyOrder>)
            }

        </div>
    );
};

export default MyOrders;