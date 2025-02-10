import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-5/12 mx-auto my-12 space-y-4 text-center'>
            <p className='text-[#d99904] italic'>--- {subHeading} ---</p>
            <h2 className='md:text-4xl text-3xl uppercase font-medium border-y-2 py-5'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;