import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import ImageCover from '../../Shared/Cover/ImageCover';

const MenuCategory = ({items,img,title,description}) => {
    return (
        <div>
             {title && <ImageCover img={img} title={title} description={description} ></ImageCover>}
             <div className='grid md:grid-cols-2 mx-4 md:w-9/12 md:mx-auto mt-16 gap-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;