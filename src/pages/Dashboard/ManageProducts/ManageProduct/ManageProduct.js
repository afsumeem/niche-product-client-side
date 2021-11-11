import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ManageProduct = ({ manage }) => {

    const { name, price, _id } = manage;


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);


    const handleDeleteProduct = id => {
        const url = `http://localhost:5000/brands/${id}`

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
            <h2>{price}</h2>


            <button onClick={() => { setShow(true); }}>Delete Product</button>

            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to cancel this order? This action cannot be undone and you will be unable to recover any data.</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteProduct(_id) }}>
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

export default ManageProduct;