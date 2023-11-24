import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // fetch all orders from api

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div className="table-responsive">
      {/* manage all orders title */}
      <h2>Manage All Orders</h2>

      <Table striped bordered hover size="sm" className=" fs-6 border-4">
        {/* all orders list header*/}
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
          {/* map all orders list*/}
          {allOrders.map((allOrder) => (
            <ManageOrder key={allOrder._id} allOrder={allOrder}></ManageOrder>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
