import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';
import banner4 from '../../../images/banner/banner-4.jpg';
import './Banner.css';

const Banner = () => {

    return (
        <div className="banner-container bg-dark">
            <Carousel fade>

                {/* carousel item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5">
                        <h2 className="mb-3">Refreshing and Clean Spring Scents are Here!</h2>
                        <h5 className="mb-5">Refreshing and Clean Spring Scents are Here!</h5>

                        <NavLink to="/explore" className="btn btn-outline-warning">Explore Your Favorite Fragrance</NavLink>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* carousel item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <h2 className="mb-3">Exclusive Top Quality Womans Perfumes.</h2>
                        <h5 className="mb-5">Exclusive Top Quality Womans Perfumes.</h5>
                        <NavLink to="/explore" className="btn btn-outline-warning">Explore Your Favorite Fragrance</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* carousel item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <h2 className="mb-3">Refreshing and Clean Spring Scents are Here!</h2>
                        <h5 className="mb-5">Refreshing and Clean Spring Scents are Here!</h5>
                        <NavLink to="/explore" className="btn btn-outline-warning">Explore Your Favorite Fragrance</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* carousel item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <h2 className="mb-3">A new Fragrance from the Spanish Fashion Brand Scalpers</h2>
                        <h5 className="mb-5">Exclusive Top Quality Womans Perfumes</h5>
                        <NavLink to="/explore" className="btn btn-outline-warning">Explore Your Favorite Fragrance</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;