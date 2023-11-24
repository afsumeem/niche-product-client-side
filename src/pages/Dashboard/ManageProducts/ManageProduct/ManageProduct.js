import { faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Modal, Button, Card } from "react-bootstrap";

const ManageProduct = ({ manage }) => {
  const { name, price, _id, img, desc } = manage;
  const [showDetails, setShowDetails] = useState(false);

  const [show, setShow] = useState(false);

  const handleOkBtn = () => setShowDetails(false);
  const handleClose = () => setShow(false);
  const handleNoBtn = () => setShow(false);

  //delete product
  const handleDeleteProduct = (id) => {
    const url = `http://localhost:5000/brands/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          window.location.reload();
        }
      })
      .finally(setShow(false));
  };

  return (
    <>
      <tr className="text-start">
        <td className="ps-5">{name}</td>
        <td>{price}</td>
        <td>
          <button
            className="border-0 btn btn-0"
            title="View Details"
            onClick={() => {
              setShowDetails(true);
            }}
          >
            <FontAwesomeIcon className="fs-6 me-2" icon={faEye} />
          </button>

          <button
            className="border-0 btn btn-0"
            title="Delete Product"
            onClick={() => {
              setShow(true);
            }}
          >
            <FontAwesomeIcon className="fs-6 me-2" icon={faTrashAlt} />
          </button>
        </td>
      </tr>

      {/* Product details */}

      <Modal
        show={showDetails}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Card>
          <Card.Img
            variant="top"
            src={img}
            style={{
              height: "200px",
              width: "200px",
              margin: "auto",
              padding: "20px",
            }}
          />

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text>

            <Card.Text className="fs-3">$ {price}</Card.Text>
          </Card.Body>

          <Modal.Footer>
            <Button variant="outline-success" onClick={handleOkBtn}>
              Ok
            </Button>
          </Modal.Footer>
        </Card>
      </Modal>

      {/* Confirmation alert */}
      <Modal show={show} onHide={handleClose}>
        <div class="modal-header">
          <h5 class="modal-title text-primary" id="exampleModalLabel">
            Confirmation
          </h5>
        </div>

        <Modal.Body>
          Are you sure you want to{" "}
          <span className="text-danger fw-bold"> delete</span> this product?
          This action cannot be undone and you will be unable to recover any
          data.
        </Modal.Body>

        <Modal.Footer>
          {/* confirmation button */}
          <Button
            variant="outline-danger"
            onClick={() => {
              handleDeleteProduct(_id);
            }}
          >
            Yes! Delete it
          </Button>
          <Button variant="outline-success" onClick={handleNoBtn}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManageProduct;
