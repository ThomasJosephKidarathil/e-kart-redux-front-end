import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        // actions are provided inside the reducers, logic to the update the state
        addtoWishlist: (state, action) => {
            state.push(action.payload)
        },
        // to remove item from state
        removefromWishlist: (state, action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const { addtoWishlist } = wishlistSlice.actions;
export const {removefromWishlist} =wishlistSlice.actions;
export default wishlistSlice.reducer;