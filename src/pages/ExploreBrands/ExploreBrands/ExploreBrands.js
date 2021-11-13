import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import ExploreBrand from '../ExploreBrand/ExploreBrand';


const ExploreBrands = () => {
    const [exploreBrands, setExploreBrands] = useState([]);
    useEffect(() => {
        fetch('https://ancient-headland-15558.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setExploreBrands(data))
    }, []);
    return (
        <div>
            <Header></Header>

            <div className="container">

                <div className="mt-5">

                    <Row xs={1} md={3} sm={2} className="g-4">
                        {
                            exploreBrands.map(exploreBrand => <ExploreBrand
                                key={exploreBrand._id}
                                exploreBrand={exploreBrand}
                            >
                            </ExploreBrand>)
                        }
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default ExploreBrands;