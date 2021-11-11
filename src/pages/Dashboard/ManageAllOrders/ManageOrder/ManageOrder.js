import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ManageOrder = ({ allOrder }) => {

    const { productName, name, date, _id, status } = allOrder;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);


    const handleDeleteOrder = id => {
        const url = `http://localhost:5000/orders/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            })
            .finally(setShow(false))
    };

    //update order status

    const handleUpdateStatus = () => {
        const updated = { status: 'Approved' }

        const url = `http://localhost:5000/orders/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved');
                    window.location.reload()
                }
            })
    };

    return (
        <div>
            <p>Name: {name}</p>
            <h2>{productName}</h2>

            <h5>{date}</h5>
            <h3>{status}</h3>

            <button onClick={() => { setShow(true); }}>cancel order</button>
            <Button onClick={handleUpdateStatus} className=" m-0 p-2 rounded-0" variant="outline-info">Order Confirm</Button>

            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to cancel this order? This action cannot be undone and you will be unable to recover any data.</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default ManageOrder;