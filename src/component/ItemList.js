import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Config.js";
import { addItem } from "../utils/cartSlice.js";
const ItemList = ({ items })=>{

     const dispatch= useDispatch();
     const handleAddItem=(item)=>{
     dispatch(addItem(item)); //whateveri pass inside addItem() is my action.payload
   }
   return(
    <div>
      
      {items.map((item) => (
        <div key = {item.card.info.id}
         className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
         >
 
             <div className="w-9/12">
              <div className="py-2">
          <span>{item.card.info.name}</span>
          <span> {item.card.info.price 
          ? 
          item.card.info.price/100 
          :
          item.card.info.defaultPrice/100}
          </span>
       </div>
       <p className="text-x5">{item.card.info.description}</p>
       </div>
       <div className="w-3/12 p-4">
        <div className="absolute">

        <button className="p-2 bg-white shadow-lg absolute m-auto"
        onClick={() => handleAddItem(item)}
         //   onclick={handleAddItem}
         // onclick = {handleItem(item)}
        >Add +</button>
        </div>
        <img src = {IMG_CDN_URL + item.card.info.imageId} />
       </div>
       </div>        

      ))}
      </div>
   );
};

export default ItemList;