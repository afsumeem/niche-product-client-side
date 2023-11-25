import React, { useState, useEffect } from "react";
import { Breadcrumb, Table } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  //fetch orders from API

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const orders = myOrders.filter((order) => user.email === order.email);

  return (
    <div className=" pb-5">
      <Breadcrumb className="my-4 ms-3">
        <Breadcrumb.Item href="/home" className="fs-6">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/dashboard" className="fs-6 ">
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item className="fs-6 " active>
          myOrder
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr style={{ color: "var(--golden)" }} />
      <h3 className="my-5 text-center" style={{ color: "var(--golden)" }}>
        My Orders
      </h3>
      {/* show users all order  */}
      <div className="bg-white mx-4">
        <Table striped bordered hover size="sm" className=" fs-6 ">
          <thead className="border-0">
            <tr style={{ backgroundColor: "var(--golden)" }}>
              <th className="text-center py-2">Name</th>
              <th className="text-center py-2">Product Name</th>
              <th className="text-center py-2">Address</th>
              <th className="text-center py-2">Price</th>
              <th className="text-center py-2">Order Date</th>
              <th className="text-center py-2">Manage Order</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((myOrder) => (
              <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
