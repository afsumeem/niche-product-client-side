import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    //fetch orders from API

    useEffect(() => {
        fetch('https://ancient-headland-15558.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

    const orders = myOrders.filter(order => user.email === order.email)

    return (
        <div className="bg-warning bg-opacity-25 pb-5">
            <h3 className="py-4">My Orders</h3>
            {/* show users all order  */}

            <Table striped bordered hover size="sm" className=" fs-6 border-4">
                <thead>
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Address</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Order Date</th>
                        <th className="p-2">Order Status</th>
                        <th className="p-2">Manage Order</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orders.map(myOrder => <MyOrder
                            key={myOrder._id}
                            myOrder={myOrder}
                        ></MyOrder>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;