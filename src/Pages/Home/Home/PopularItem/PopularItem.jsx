import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularItem = () => {
    const [menu,setMenu] = useState([]);
    console.log(menu)
    useEffect(() => {
        axios.get('menu.json')
        .then(res =>  {
            const popularItems = res.data.filter(item => item.category === "popular")
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={"Cheak It Out"}
            heading={"A World of Flavors"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItem;