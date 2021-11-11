import React, { useState, useEffect } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';


const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, []);

    return (
        <div>
            <h2>Manage Products {manageProducts.length}</h2>

            {
                manageProducts.map(manage => <ManageProduct

                    key={manage._id}
                    manage={manage}

                ></ManageProduct>)
            }

        </div>
    );
};

export default ManageProducts;