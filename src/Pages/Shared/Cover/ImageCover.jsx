import React from 'react';
import { Parallax, Background } from 'react-parallax';
const ImageCover = ({img, title,description}) => {
    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
        className="hero h-[550px] "
        >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-[1024px] h-[264px] py-16 bg-[#15151599]">
            <h1 className="mb-5 text-5xl font-bold uppercase font-Cinzel">{title}</h1>
            <p className="mb-5 uppercase font-Cinzel ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default ImageCover;