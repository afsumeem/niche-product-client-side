import React, { useState, useEffect } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    return (
        <div>
            <h2>Manage All Orders {allOrders.length}</h2>
            {
                allOrders.map(allOrder => <ManageOrder

                    key={allOrder._id}
                    allOrder={allOrder}

                ></ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;