import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


    useEffect(() => {
        fetch('https://ancient-headland-15558.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    return (
        <div>
            <h2>Manage All Orders {allOrders.length}</h2>

            <Table striped bordered hover size="sm" className=" fs-6 border-4">
                <thead>
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Order Date</th>
                        <th className="p-2">Order Status</th>
                        <th className="p-2">Manage Order</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allOrders.map(allOrder => <ManageOrder

                            key={allOrder._id}
                            allOrder={allOrder}

                        ></ManageOrder>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;