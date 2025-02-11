import React from 'react';

const MenuItem = ({item}) => {
    const {name,price,recipe,image} = item;
    return (
        <div className='flex space-x-5'>
            <img className='md:w-[120px] h-14 w-16 rounded-r-full rounded-b-full md:h-28' src={image} alt={name} />
            <div>
                <h1 className='uppercase'>{name}----------</h1>
                <p className='text-xs md:text-[16px]'>{recipe}</p>
            </div>
            <p className='text-[#d99904]'>{price}</p>
        </div>
    );
};

export default MenuItem;