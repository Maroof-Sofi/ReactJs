
import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    //cartSlice is a function which takes a configuration to create a slice
   name : 'cart',
   initialState : {
    items:["burger" , "Pizza"],  //rn our cart is empty
   },
   reducers:{  //here we will write reducers coreesponding to each action
      addItem :(state, action) =>{  //addItem will dispatch an action and calls an reducer function which takes (state , action ) as paramters
        // mutating/modifying the state over here

        // In VanillaRedux Redux=> Don't mutate the state, returning was mandatory
        // const newState = [...state],
        // newState.items.push(action.payload);
        // return newState;

        // Redux Toolkit
        // We have to mutate the State  
        // Redux uses Immer library to do this
        // Immer is kind of finding the difference between the original state , the mutated state and gives u back a new state which is immutable state
        state.items.push(action.payload);  

      },
      removeItem : (state)=>{
        state.items.pop();

      },
      clearCart: (state)=>{
        state.items.length=0;  //our cart has 0 elements inside
      }

   }

});
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

// when we are creating a slice  so there are multiple reducer function 
//i:e why they are known as reducers and when we are exporting it we are just exporting a one reducer of it
