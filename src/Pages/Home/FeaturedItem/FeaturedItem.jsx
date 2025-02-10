import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <section className='featured-item bg-fixed text-white'>
            <div className='pt-8'>
            <SectionTitle
            subHeading={"Cheak It Out"}
            heading={"Tasty Deals Just for You!"}
            ></SectionTitle>
            </div>

            <div className='md:flex justify-center items-center pt-12 pb-24 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-12 space-y-1'>
                    <p>March 28, 2025</p>
                    <h2 className='text-xl'>Where Can I Get Some ?</h2>
                    <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel provident voluptates repudiandae eveniet quo commodi, beatae alias vitae natus sunt amet veniam sapiente! Vero delectus id distinctio repudiandae perferendis placeat non, neque natus magni. Impedit tempore quaerat, distinctio accusantium nam possimus totam reprehenderit iure officia! Fugiat minima exercitationem debitis.</p>
                    <button className='btn btn-outline border-0 border-b-4  border-gray-700 text-white'>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;