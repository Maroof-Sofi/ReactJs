import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearItems = ()=>{
      dispatch(clearCart());
     }

     const cartItems = useSelector((store)=> store.cart.items); //this is subscribing to the small portion of the store and it very much efficient
    //  This cartItems will only update when my store,cart.items will change it has nothing to do happening outside teh scope of this
    //  const store = useSelector((store)=> store); //it is slecting the whole store 
    // const cartItems = store.cart.items;
    // Both the ways are perfect 


    return (
    <div className='text-center  m-4 p-4'>
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className='w-6/12 m-auto'>
           <button className='p-2 m-2 bg-black text-white cursor-pointer rounded-lg'
           onClick={handleClearItems}
           >{cartItems.length ===0 && <h1>Cart is Empty</h1>}</button>
            <ItemList items={cartItems} />
        </div>
    </div>
  );
};

export default Cart;