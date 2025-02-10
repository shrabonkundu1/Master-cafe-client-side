import React from 'react';
import Banner from '../../Banner/Banner';
import FoodCategory from '../../Category/FoodCategory';
import PopularItem from './PopularItem/PopularItem';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div className='my-28 md:w-9/12 mx-auto'><FoodCategory></FoodCategory></div>
            <div className='my-28 md:w-9/12 mx-auto'><PopularItem></PopularItem></div>
            <div className='my-28  mx-auto'><FeaturedItem></FeaturedItem></div>
            This is HOme
        </div>
    );
};

export default Home;