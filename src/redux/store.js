import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        wishlistReducer: wishlistSlice,
        // wishlistSlice is the slice fuction that export from wishlistSlice.js
        cartReducer: cartSlice
    }
})
export default store;