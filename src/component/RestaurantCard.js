// This below function should be dynamic 
// const  RestaurantCard = ()=>{
//   return(
//     <div className="card">
//       <img 
//        src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f9f321299d6b91ffe24965cdbdf07351"/>
//       <h2>Starbucks Coffe</h2>
//       <h3>Beverages, cafe , snacks</h3>
//       <h4>4.2 Stars</h4>
//     </div>
//   );

// };

import { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../utils/UserContext";

  const  RestaurantCard = (props) => {
  const {resData} = props;
  const {loggedInUser} = useContext(UserContext);

  const {
    name, 
  cuisines, 
  lastMileTravelString, 
  cloudinaryImageId, 
  user } = resData?.data;
 
    return (
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-900">
        <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId
    }
      className="rounded-lg"
       alt="res-logo"
     />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{avgRating} stars</h3> 
        <h4>{lastMileTravelString} minutes</h4>
        <h4>{name}</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    );
 };
  export  const   withPromotedlabel = (RestaurantCard) => {
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
 }; 
  export default RestaurantCard;