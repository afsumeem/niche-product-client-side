import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ExploreBrand = ({ exploreBrand }) => {
    const { name, desc, price, img } = exploreBrand;

    // style images
    const imgStyle = {
        height: '250px',

    };
    return (
        <div className="mt-5">
            {/* show perfume details */}

            <Col>
                <Card className="border-0 bg-primary bg-opacity-25">

                    {/* perfume brand info thumbnail */}
                    <Card.Img className="p-2" variant="top" src={img} style={imgStyle} />
                    <Card.Body className="p-2">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-start">
                            {desc.slice(1, 250)}
                        </Card.Text >
                        <h3 className="text-start"> Price: $ {price}</h3>
                    </Card.Body>

                    {/* buy now button */}
                    <Card.Footer>
                        <NavLink to="/purchase" className="text-decoration-none fs-5 fw-bold">
                            BUY NOW
                        </NavLink>
                    </Card.Footer>

                </Card>
            </Col>


        </div>
    );
};

export default ExploreBrand;