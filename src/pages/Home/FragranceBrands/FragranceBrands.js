import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Brand from '../Brand/Brand';

const FragranceBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return (
        <div className="container">

            <h2 className="pt-5 pb-3">Top Fragrance Brands</h2>
            <Row xs={1} md={3} sm={2} className="g-5">
                {
                    brands.map(brand => <Brand
                        key={brand._id}
                        brand={brand}
                    >
                    </Brand>)
                }
            </Row>

        </div>
    );
};

export default FragranceBrands;