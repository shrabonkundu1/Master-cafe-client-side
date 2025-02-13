import React, {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import orderImg from '../../../assets/shop/banner2.jpg'
import ImageCover from '../../Shared/Cover/ImageCover';
import useMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import VarityTab from '../VarityTab/VarityTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const OrderFood = () => {

  const categories = ["salad", "pizza","soup","dessert", "drinks",] 
  const {category} = useParams();
  const initialIndex  = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu,loading] = useMenu();
  //   if (loading) {
  //     return <p>Loading...</p>;
  // }
  if ( !Array.isArray(menu)) {
      return <p>Error: Menu data is not available.</p>;
  }

    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
          <Helmet>
            <title>
              Master Cafe | Order Food
            </title>
          </Helmet>
            <ImageCover img={orderImg} title={"Order FOod"} description={"Would You Like To Try A Dish?"}></ImageCover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="w-max md:text-2xl  font-medium my-16 mx-auto border-b-2  ">
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
   <VarityTab items={salad}></VarityTab>
  </TabPanel>
  <TabPanel>
    <VarityTab items={pizza}></VarityTab>
  </TabPanel>
  <TabPanel>
    <VarityTab items={soup}></VarityTab>
  </TabPanel>
  <TabPanel>
    <VarityTab items={dessert}></VarityTab>
  </TabPanel>
  <TabPanel>
    <VarityTab items={drinks}></VarityTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default OrderFood;