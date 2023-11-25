import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyOrder = ({ myOrder }) => {
  const { productName, name, date, _id, price, Address, payment } = myOrder;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleNoBtn = () => setShow(false);

  // handle delete order

  const handleDeleteOrder = (id) => {
    const url = `http://localhost:5000/orders/${id}`;

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
      <tr>
        <td className="py-2 text-center">{name}</td>
        <td className="py-2 text-center">{productName}</td>
        <td className="py-2 text-center">{Address}</td>
        <td className="py-2 text-center">$ {price}</td>
        <td className="py-2 text-center">{date}</td>
        <td className="py-2 text-center">
          <button
            className="border-0 btn btn-0 text-danger"
            title="Delete Product"
            onClick={() => {
              setShow(true);
            }}
          >
            <FontAwesomeIcon className="fs-6 me-2" icon={faTrashAlt} />
          </button>
        </td>

        <td className="py-2 text-center">
          {payment ? (
            "Paid"
          ) : (
            <Link to={`/dashboard/payment/${_id}`}>
              <button
                className="btn"
                style={{
                  border: "1px solid var(--golden)",
                  color: "var(--golden)",
                }}
              >
                Pay
              </button>
            </Link>
          )}
        </td>
      </tr>

      {/* Confirmation alert */}
      <Modal show={show} onHide={handleClose}>
        <div class="modal-header">
          <h5
            class="modal-title"
            style={{ color: "var(--golden)" }}
            id="exampleModalLabel"
          >
            Confirmation
          </h5>
        </div>
        <Modal.Body>
          Are you sure you want to cancel this order? This action cannot be
          undone and you will be unable to recover any data.
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteOrder(_id);
            }}
          >
            Yes! Delete it
          </Button>
          <button
            className="btn"
            style={{
              border: "1px solid var(--golden)",
              color: "var(--golden)",
            }}
            onClick={handleNoBtn}
          >
            No
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyOrder;
