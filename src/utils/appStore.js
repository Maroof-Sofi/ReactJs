
import {configureStore} from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer:{
      cartReducer,
  } 

})

export default appStore;