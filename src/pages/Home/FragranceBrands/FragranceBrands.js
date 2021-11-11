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
            <div className="mt-5">
                <h2 className="pt-5">Top Fragrance Brands {brands.length}</h2>
                <Row xs={1} md={3} sm={2} className="g-4">
                    {
                        brands.map(brand => <Brand
                            key={brand._id}
                            brand={brand}
                        >
                        </Brand>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default FragranceBrands;