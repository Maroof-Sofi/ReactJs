import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//  This RestaurantCategory component is controlled component bcoz it is controlled by RestaurantMenu component
//  when it has its own state then its unctolled component bcoz Restaurantmenu doesnt have its control it can show and hide by itself
//  const [showItems, setShowItems] = useState(false);

   const handleClick = ()=>{
    // console.log("Clicked");
    // setShowItems(!showItems);
    setShowIndex();
   };
    // console.log(data)
    return(
        <div>
            {/* Header */}
           {/* RestCategory */}
           <div className="w-6/12 bg-gay-50 shadow-lg p-4 ">
            <div className="flex justify-between" onClick={handleClick}> 

            <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
            </span>
            <span>🔽</span>
            </div>

            {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards} />}

           </div>
        </div>
    );
};

export default RestaurantCategory;




