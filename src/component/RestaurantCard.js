
import { IMG_CDN_URL } from "../Config";
// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//       <div className="card">
//         <img  
//         src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//        props.restaurant.data?.cloudinaryImageId
//        }
//        />

//         <h2>{ props.restaurant.data?.name}</h2>
//         <h3>{ props.restaurant.data?.cuisines.join(", ")}</h3> 
//         <h4>{ props.restaurant.data?.lastMileTravelString} minutes</h4>
//       </div>
//     );
// };

//  we can also deStructure this
// const RestaurantCard = ({restaurant}) => {
//   return (
//       <div className="card">
//         <img  
//         src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//        restaurant.data?.cloudinaryImageId
//        }
//        />

//         <h2>{ restaurant.data?.name}</h2>
//         <h3>{restaurant.data?.cuisines.join(", ")}</h3> 
//         <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
//       </div>
//     );
// };

// again DeStructure this

// const RestaurantCard = ({restaurant}) => {
//   const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
//   return (
//       <div className="card">
//         <img  
//         src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//         cloudinaryImageId
//        }
//        />

//         <h2>{name}</h2>
//         <h3>{ cuisines.join(", ")}</h3> 
//         <h4>{ lastMileTravelString} minutes</h4>
//       </div>
//     );
// };
// We can deStructue this also

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
 
    return (
        <div className="card">
          <img 
          src = {
            IMG_CDN_URL+
          cloudinaryImageId
         }
         />
  
          <h2>{name}</h2>
          <h3>{ cuisines.join(", ")}</h3> 
          <h4>{ lastMileTravelString} minutes</h4>
        </div>
      );
  };


  export default RestaurantCard;