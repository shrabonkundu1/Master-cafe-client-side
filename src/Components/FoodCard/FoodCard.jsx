import React from "react";

const FoodCard = ({item}) => {

    const {name,price,recipe,image} = item;
  return (
    <div className="card bg-base-200 rounded-sm shadow-sm  shadow-blue-400">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <p className="bg-black text-white absolute right-5  top-5 p-1 px-3">${price}</p>
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-gray-600 border-0 border-b-4 bg-gray-200 border-[#d59536] hover:border-b-gray-600 text-[#d59536] ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
