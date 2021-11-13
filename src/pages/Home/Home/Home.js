import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';
import FragranceBrands from '../FragranceBrands/FragranceBrands';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FragranceBrands></FragranceBrands>
            <Reviews></Reviews>

            <Facility></Facility>

            <Footer></Footer>
        </div>
    );
};

export default Home;