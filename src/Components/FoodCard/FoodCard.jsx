
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({item}) => {
  const {name,price,recipe,image,_id} = item;

  const {user}= UseAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const [,refetch] = UseCart();
  
  const handleAddToCard = () =>{
    if(user && user?.email){

      const cartItem = {
        menuId : _id,
        email : user.email,
        image,
        name,
        price,
      }

      axios.post('http://localhost:5000/carts',cartItem, {
        headers: { "Content-Type": "application/json" }, 
      })
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2000
          });
          refetch();
        }
        console.log(res.data)
      })
    }else{
      Swal.fire({
        title: "You are not logged in?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from:location}})
        }
      });
    }
  }
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
          <button className="btn hover:bg-gray-600 border-0 border-b-4 bg-gray-200 border-[#d59536] hover:border-b-gray-600 text-[#d59536] " onClick={handleAddToCard}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
