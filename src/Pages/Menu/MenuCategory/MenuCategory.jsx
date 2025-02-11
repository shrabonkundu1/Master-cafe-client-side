import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import ImageCover from "../../Shared/Cover/ImageCover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <div>
      {title && (
        <ImageCover
          img={img}
          title={title}
          description={description}
        ></ImageCover>
      )}
      <div className="grid md:grid-cols-2 mx-4 md:w-9/12 md:mx-auto mt-16 gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    {
      title &&   <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4  border-gray-700 text-black">
          Order Now
        </button>
      </Link>
    }
    </div>
  );
};

export default MenuCategory;
