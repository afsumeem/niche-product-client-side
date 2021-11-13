import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ExploreBrand = ({ exploreBrand }) => {
    const { name, desc, price, img, _id } = exploreBrand;

    // style images
    const imgStyle = {
        height: '250px',

    };
    return (
        <div className="mt-5">
            {/* show perfume details */}

            <Col>
                <Card className=" m-3">

                    {/* perfume brand info thumbnail */}
                    <Card.Img className="w-100" variant="top" src={img} style={imgStyle} />
                    <Card.Body className="p-2">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-start">
                            {desc.slice(0, 150)}
                        </Card.Text >
                        <h4 className="text-start"> Price: $ {price}</h4>
                    </Card.Body>

                    {/* buy now button */}
                    <Card.Footer>
                        <NavLink to={`/purchase/${_id}`} className="text-decoration-none fs-5">
                            <FontAwesomeIcon className="fs-6 me-2" icon={faCartPlus} /> Purchase Now
                        </NavLink>
                    </Card.Footer>

                </Card>
            </Col>


        </div>
    );
};

export default ExploreBrand;