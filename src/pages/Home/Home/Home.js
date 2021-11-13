import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';
import FragranceBrands from '../FragranceBrands/FragranceBrands';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (

        // home page
        <div>

            {/* header section */}
            <Header></Header>

            {/* banner section */}
            <Banner></Banner>

            {/* all fragrance brands */}
            <FragranceBrands></FragranceBrands>

            {/* customer reviews */}
            <Reviews></Reviews>

            {/* facilities section */}
            <Facility></Facility>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;