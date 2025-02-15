// import React from 'react';
// import FoodCategory from '../../Category/FoodCategory';
// import PopularItem from './PopularItem/PopularItem';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonials from '../TestiMonials/Testimonials';
import Banner from '../Banner/Banner';
import FoodCategory from '../Category/FoodCategory';
import PopularItem from '../PopularItem/PopularItem';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Master Cafe | Home</title>
            </Helmet>
            <div><Banner></Banner></div>
            <div className='my-28 md:w-9/12 mx-auto'><FoodCategory></FoodCategory></div>
            <div className='my-28 md:w-9/12 mx-auto'><PopularItem></PopularItem></div>
            <div className='my-28  mx-auto'><FeaturedItem></FeaturedItem></div>
            <div className='my-28 md:w-7/12 mx-auto'><Testimonials></Testimonials></div>
            

            This is HOme
        </div>
    );
};

export default Home;