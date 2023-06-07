
import { restaurantList } from "../Config";

import RestaurantCard from "./RestaurantCard";

import { useState } from "react";


function filterData(searchText, restaurants){
 const filterData = restaurants.filter((restaurant) => 
 restaurant.data.name.includes(searchText)
 );
 return filterData;
 
}
const Body = ()=>{
    // const searchTXT = "FKC"; //local variables like this in react are not prefrable
  
  // return  (
  //     <>
      {/* <div className="search-container">
        <
          input type="text" 
        className="search-input" 
        placeholder="Search"
        value={ searchTXT}
        onChange={(e)=>
          console.log(e.target.value)}
          />
          <button className="search-btn">Search</button>
          
          </div> 
        This is one way Data Binding */}
    {/* 
    state
    hooke
  */}
  const [searchText , setSearchText] = useState(""); 
  // // const [searchClicked, setSearchClicked] = useState('f?alse'); 
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <
          input type="text" 
        className="search-input" 
        placeholder="Search"
        value={searchText}
        onChange={(e)=>{
       setSearchText(e.target.value);
        }}
        />

   
  

        {/* <h1>{searchClicked}</h1> */}
        <button className="search-btn"
         onClick={()=>{
        //   if(searchClicked === "true"){
        //     setSearchClicked("false");
        //   }else{
        //     setSearchClicked("true");
        //   }
        //  }}
        const data = filterData(searchText, restaurants);
        setRestaurants(data);
         }} 
        >Search</button>

      </div> 
    <div className="restaurant-list">
      {restaurants.map((restaurant)=>{
        return <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />;
      })}
   
    </div>
      </>
    );
  };

  export default Body;