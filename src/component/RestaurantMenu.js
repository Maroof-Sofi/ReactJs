import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL} from "../Config";
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
    // how to read a dynamic url
    const {resId} = useParams();
    // console.log(resId);
    // const [restaurant, setRestaurant] = useState(null);
     const resInfo = useRestaurant(resId);
     
     const [showIndex, setShowIndex] = useState(0)
     if(resInfo === null) return <Shimmer/>;
     const {name,cuisines,costForTwoMsg} = resInfo?.cards[0]?.card?.card.info;
       
     const {itemCards} = 
     resInfo?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     console.log(itemCards);
  
     const  categories = resInfo?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards.filter(
      c => 
      c.card?.["card"]?.["@type"] ===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
    return  !restaurant ? (
    <Shimmer/>
    ) : (
     
    <div className='text-center'>
      
      <h1 className='font-bold my-10 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(", ")} - {costForTwoMsg}
      </p>
      {/* categories accordins */}
      {categories.map((category, index)=> (
      <RestaurantCategory   
      key={category?.card?.card.title}  
      data = {category?.card?.card}
      showItems={index === showIndex ? true : false}
      setShowIndex = {() => setShowIndex(index)}
      />
      ))}
      {/* <div>
        <h1>Restaurant id :{resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src= {restaurant?.cloudinaryImageId}/>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>

      </div>
        <h1>Menu</h1>
        <ul>
        {restaurant?.menu?.items &&
        Object.values(restaurant.menu.items).map((item) => (
          <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    </div> */}
    </div>
    );
};

export default RestaurantMenu;