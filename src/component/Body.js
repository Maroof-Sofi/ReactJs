import { restaurantList } from "../Config";
import RestaurantCard, { withPromotedLabel} from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { withPromotedlabel } from "./RestaurantCard"; 
// const Body = ()=>{
//   return(
//     <div className="restaurant-list">
//       <RestaurantCard {...restaurantList[0].data}/>
//       <RestaurantCard {...restaurantList[1].data}/>
//       <RestaurantCard {...restaurantList[2].data}/>
//       <RestaurantCard {...restaurantList[3].data}/>
//       <RestaurantCard {...restaurantList[4].data}/>
//       <RestaurantCard {...restaurantList[5].data}/>
//       <RestaurantCard {...restaurantList[6].data}/>
//       <RestaurantCard {...restaurantList[7].data}/>
//       <RestaurantCard {...restaurantList[14].data}/>
//       <RestaurantCard {...restaurantList[13].data}/>
//       <RestaurantCard {...restaurantList[9].data}/>
//       <RestaurantCard {...restaurantList[10].data}/>
//       <RestaurantCard {...restaurantList[11].data}/>
//       <RestaurantCard {...restaurantList[12].data}/>
   
//     </div>
//   );
// };



const Body = () => {
   const [searchText, setSearchText] = useState("");  
  //  console.log("render");   //it will re render after every key press the best way to call an API is using useEffect
    // const [searchClicked, setSearchClicked] = useState("false");

    const [ allRestaurants, setallRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
   
    const RestaurantCardPromoted = withPromotedlabel (RestaurantCard);

    //epmty dependency array => once after render
// deep array[searchText] => once after intial render + everytime aftyer render(my search Text Changes) 
 
  // useEffect(()=>{
  // console.log("useEffect");
  // },[]);
  // console.log(restaurants);
  // console.log("render");
    // useEffect(()=>{
    // API CALL SHOULD BE MADE OVER HERE
    // fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    //  getRestaurant();
    //  console.log("useEffect");
    // },[]);
    console.log("Body Rendered".allRestaurants);

      useEffect(()=>{
       getRestaurant();
      }, []);

    const   getRestaurant = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING" 
        );
      const json = await data.json();
      console.log(json);
  setallRestaurants (json?.data?.cards[2]?.data?.data?.cards);
  setfilteredRestaurants (json?.data?.cards[2]?.data?.data?.cards);
    };
      
   
    const isonline = useOnline();
    if(isonline === false){
      return (
      <h1>looks like you're  offline!!please check your internet connection</h1>
      );
    
    // console.log("render");
    // bcoz useEffect it is a callback functrion and it will be called once and after initial render
    //when we dont have restaurants don't render it
    // if(!allRestaurants) return null;
    // if(!filteredRestaurants?.length===0) return <h1>No Restaurant Found</h1>;
    return allRestaurants.length === 0 ? (
    <Shimmer/>
    ) : (
    
      //   <>
      //   <div className="search-wrapper">
      //     <input  className="seacrh-input"
      //     type="text"
      //     value={searchText}
      //     placeholder="search" 
      //     onChange={(e)=>{
      //       setSearchText(e.target.value);
      //     }}
      //     />
      //     <button className="search-btn"
      //     onClick= {()=>{
      //       const data = filterData(searchText, allRestaurants);
      //       //update the state-restaurants
      //       setallRestaurants(data);
      //     }} >Seacrh</button>
         
      //    </div>
      // <div className="restaurant-list">
      //   {/* you have to write a logic for No Restaurant found */}
      //   {filteredRestaurants.map((restaurant)=>{
      //       return (
      //         <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
      //         <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      //         <RestaurantCard {...restaurant.data} user = {user} />
      //       </Link>
            
      //       ); 
      //       })} 
  
      // </div>
      //   </>
      <div className="body">
        <div className="flex">
          <div className="search m-4 p-4">
            
            <input 
            type="text"
            className="border border-solid border-black"
            value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
                />
                <button  className="px-4 py-2 bg-green-100 m-4"
                onClick = {() => {
                  // filter the restaurant and update the UI
                  // seacrhText
                  console.log(searchText);

                  const filteredRestaurants = allRestaurants.filter((res)=>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setfilteredRestaurants(filteredRestaurants);
                }}
                >
                  Search
                  </button>
          </div>
          <div className = "search m-4 p-4 flex items-center" >
          <button 
           className=" px-4 py-2 bg-green-100 rounded-lg m-4"
           onClick = {() => {
            const filteredList = allRestaurants.filter(
              (res)=>res.data.avgRating > 4
              );
            setallRestaurants(filteredList);
           }}
          >
            Top Rated Restaurants
          </button>
          </div>
        
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <link 
            key = {restaurant.data.id}
            to = {"/restaurants/" + restaurant.data.id}
            >
              
                  {restaurant.data.promoted ? (
                  <RestaurantCardPromoted resData={restaurant}/>
                  ):(
                    <RestaurantCard resData = {restaurant}/> 
                  )}
            </link>
          ))}
        </div>
      </div>
    );
  };
};

export default Body;


