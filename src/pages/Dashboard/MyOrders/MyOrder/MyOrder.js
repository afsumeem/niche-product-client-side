import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyOrder = ({ myOrder }) => {

    const { productName, name, date, _id, status } = myOrder;

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


    return (
        <div>
            <p>Name: {name}</p>
            <h2>{productName}</h2>

            <h5>{date}</h5>
            <h3>{status}</h3>

            <button onClick={() => { setShow(true); }}>cancel order</button>

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

export default MyOrder;