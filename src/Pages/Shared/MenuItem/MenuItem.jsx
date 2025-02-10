import React from 'react';

const MenuItem = ({item}) => {
    const {name,price,recipe,image} = item
    return (
        <div className='flex space-x-5'>
            <img className='w-[120px] rounded-r-full rounded-b-full h-28' src={image} alt={name} />
            <div>
                <h1 className='uppercase'>{name}----------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-[#d99904]'>{price}</p>
        </div>
    );
};

export default MenuItem;