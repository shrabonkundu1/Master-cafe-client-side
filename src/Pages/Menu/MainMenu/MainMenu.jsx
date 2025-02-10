import React from 'react';
import { Helmet } from "react-helmet-async";
import ImageCover from '../../Shared/Cover/ImageCover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import SaladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const MainMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Master Cafe | Menu</title>
            </Helmet>
            <ImageCover img={menuImg} title={"Our Menu"} description={"Would You Like To Try A Dish?"} ></ImageCover>

            <SectionTitle  subHeading={"Don't Miss"} heading={"Today's Special Offer"}></SectionTitle>
           <div className=' my-16'>
           <MenuCategory items={offered}></MenuCategory>
           </div>
           <div className='mb-16'>
            <MenuCategory img={dessertImg} items={dessert} title={"DESSERT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ipsa dolor. Voluptatem, dolore ullam necessitatibus odit voluptas ipsum consequatur culpa?"}></MenuCategory>
           </div>
           <div className='mb-16'>
            <MenuCategory img={pizzaImg} items={pizza} title={"Pizza"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ipsa dolor. Voluptatem, dolore ullam necessitatibus odit voluptas ipsum consequatur culpa?"}></MenuCategory>
           </div>
           <div className='mb-16'>
            <MenuCategory img={soupImg} items={soup} title={"Soup"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ipsa dolor. Voluptatem, dolore ullam necessitatibus odit voluptas ipsum consequatur culpa?"}></MenuCategory>
           </div>
           <div className='mb-16'>
            <MenuCategory img={SaladImg} items={salad} title={"Salad"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ipsa dolor. Voluptatem, dolore ullam necessitatibus odit voluptas ipsum consequatur culpa?"}></MenuCategory>
           </div>
        </div>
    );
};

export default MainMenu;