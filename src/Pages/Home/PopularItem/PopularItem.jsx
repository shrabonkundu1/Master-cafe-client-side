import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/UseMenu';

const PopularItem = () => {
    
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    // const [menu,setMenu] = useState([]);
    // console.log(menu)
    // useEffect(() => {
    //     axios.get('menu.json')
    //     .then(res =>  {
    //         const popularItems = res.data.filter(item => item.category === "popular")
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section>
            <SectionTitle
            subHeading={"Cheak It Out"}
            heading={"A World of Flavors"}
            ></SectionTitle>

            <section className='grid md:grid-cols-2 mx-4  md:mx-0 gap-8'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </section>
        </section>
    );
};

export default PopularItem;